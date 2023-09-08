import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { usePaystackPayment } from 'react-paystack';
import dotenv from 'dotenv';
dotenv.config();

interface CartItem {
 id: string;
 img: string;
 name: string;
 amount: number;
 price: number;
}

interface CartProps {
 cart: CartItem[];
 setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
 handleChange: (item: CartItem, value: number) => void;
}

const Cart = ({ cart, setCart, handleChange }: CartProps) => {
 const [price, setPrice] = useState(0);

 const handleRemove = (id: string) => {
   const arr = cart.filter((item) => item.id !== id);
   setCart(arr);
   handlePrice();
   toast.error("Item removed from cart", {
     position: "top-center",
     autoClose: 1000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
     theme: "light",
   });
 };

 const handlePrice = () => {
   let ans = 0;
   cart.forEach((item) => (ans += item.amount * item.price));
   setPrice(ans);
 };

 useEffect(() => {
   handlePrice();
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [cart]);

 const config = {
   reference: (new Date()).getTime().toString(),
   email: process.env.REACT_APP_EMAIL!,
   publicKey: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY!,
 };

 const onSuccess = (reference: any) => {
   toast.success("Payment successfully completed");
 };

 const onClose = () => {
   toast.error("Your payment was unsuccessful, try again later!");
 }

 const initializePayment = usePaystackPayment({
   ...config,
   amount: price * 100,
 });

 return (
   <>
     <section className="w-full align-center text-black items-center mx-auto container flex justify-center">
       <section className="mt-8 px-2">
         {cart.length === 0 ? (
           <div className="container mx-auto justify-center">
             <p className="text-center font-semibold text-xl">Nothing in cart yet</p>
           </div>

         ) : (
           cart.map((item) => (
             <div className="flex items-center justify-between mt-10 pb-2 border-b-2" key={item.id}>
               <div className="flex w-80">
                 <img src={item.img} alt="" className="w-20 h-16" />
                 <p className="font-bold ml-5 mt-4">{item.name}</p>
               </div>
               <div className="flex items-center justify-between pb-2 mt-2">
                 <button className="px-2.5 py-1.5 text-lg font-bold mr-1.5" onClick={() => handleChange(item, -1)}>
                   -
                 </button>
                 <button>{item.amount}</button>
                 <button className="px-2.5 py-1.5 text-lg font-bold mr-1.5" onClick={() => handleChange(item, 1)}>
                   +
                 </button>
               </div>
               <div>
                 <span className="text-brandColor py-1.5 px-2.5 rounded-lg mr-2.5"> $ {item.price}</span>
                 <button
                   className="py-2 px-2.5 font-semibold bg-red-100 rounded-lg cursor-pointer text-red-500 hover:text-red-600"
                   onClick={() => handleRemove(item.id)}
                 >
                   <FaTrash title="Remove from cart" />
                 </button>
               </div>
             </div>
           ))
         )}
         {cart.length > 0 && (
           <>
             <div className="flex justify-between mt-8">
               <span className="text-lg font-semibold">Total price :</span>
               <span className="text-lg font-semibold text-brandColor">  ${price}</span>
             </div>
             <section className="flex justify-between mt-12">
               <button onClick={() => initializePayment(onSuccess as any, onClose)} className="bg-green-400 text-white py-2 px-4 text-lg w-full rounded-xl hover:border-2 hover:bg-green-800 hover:text-brandColor hover:border-brandColor">Checkout</button>
             </section>
           </>
         )}
       </section>
     </section>
     <ToastContainer />
   </>
 );
};

export default Cart;