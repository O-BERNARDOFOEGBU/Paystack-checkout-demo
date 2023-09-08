import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'tailwindcss/tailwind.css';
import 'react-toastify/dist/ReactToastify.css';
import Details from "./Components/Details";
import TopSect from "./Components/TopSect";
import Cart from "./Components/Cart";

const App = () => {
 const [show, setShow] = useState(true);
 const [cart, setCart] = useState<any[]>([]);

 const handleClick = (item: any) => {
   if (cart.some((cartItem) => cartItem.id === item.id)) return;
   setCart([...cart, item]);
   toast.success('Item has been added to cart', {
     position: "top-center",
     autoClose: 2000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
     theme: "light",
   });
 };

 const handleChange = (item: any, d: number) => {
   setCart((prevCart) =>
     prevCart.map((cartItem) => {
       if (cartItem.id === item.id) {
         const updatedAmount = cartItem.amount + d;
         return { ...cartItem, amount: updatedAmount > 0 ? updatedAmount : 1 };
       }
       return cartItem;
     })
   );
 };

 return (
   <>
     <section className="flex flex-col px-2 pt-8 w-full bg-bgColor">
       <React.Fragment>
         <TopSect setShow={setShow} size={cart.length} />
         {show ? (
           <Details handleClick={handleClick} />
         ) : (
           <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
         )}
       </React.Fragment>
     </section>
     <ToastContainer />
   </>
 );
};

export default App;