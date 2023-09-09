import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import { list } from "../data";
import { FaSearch } from "react-icons/fa";

interface CartItem {
 id: string;
 img: string;
 name: string;
 amount: number;
 price: number;
}

interface DetailsProps {
 handleClick: (item: any) => void;
}

function Details({ handleClick }: DetailsProps) {
 const [category, setCategory] = useState(list);
 const [activeTab, setActiveTab] = useState("All");

 //search functionality
 const [query, setQuery] = useState("");

 //filtering functionality
 const handleBtns = (word: string) => {
   if (word === "All") {
     setCategory(list);
   } else {
     const filtered = list.filter((item) => item.kind === word);
     setCategory(filtered);
   }

   setActiveTab(word);
 };

 return (
   <>
     <section className="container pt-4 mx-auto w-full bg-bgColor">
       <section className="px-6 flex lg:flex-row md:flex-row justify-between md:flex flex-col">
         <div className="relative w-80 h-11 mt-4 md:w-60 md:mr-2">
           <input
             type="text"
             onChange={(event) => setQuery(event.target.value)}
             className="w-full h-full py-4 px-10 text-base text-black rounded-lg border-2 border-black"
             placeholder="Search food..."
           />
           <i>
             <FaSearch className="absolute left-4 top-4 text-lg w-4 h-4 text-center text-black focus:outline-none" />
           </i>
         </div>

         <div className="flex flex-wrap mt-4 lg:mb-4 mb-8">
           <button
             value="All"
             onClick={() => handleBtns("All")}
             className={`mr-2 text-brandColor border-brandColor border-2 py-1 px-6 md:w-24 h-10 rounded-lg text-lg hover:bg-green-400 hover:text-white hover:border-green-400 ${
               activeTab === "All"
                 ? "bg-green-400 outline-none text-white"
                 : ""
             }`}
           >
             All
           </button>
           <button
             value="African"
             onClick={() => handleBtns("African")}
             className={`mr-2 text-brandColor border-brandColor border-2 py-1 px-6 md:w-24 h-10 rounded-lg text-lg hover:bg-green-400 hover:text-white hover:border-green-400 ${
               activeTab === "African"
                 ? "bg-green-400 outline-none text-white"
                 : ""
             }`}
           >
             African
           </button>
           <button
             value="American"
             onClick={() => handleBtns("American")}
             className={`mr-2 text-brandColor border-brandColor border-2 py-1 md:w-24 h-10 rounded-lg text-lg hover:bg-green-400 hover:text-white hover:border-green-400 ${
               activeTab === "American"
                 ? "bg-green-400 outline-none text-white"
                 : ""
             }`}
           >
             American
           </button>
           <button
             value="Chinese"
             onClick={() => handleBtns("Chinese")}
             className={`mr-2 text-brandColor border-brandColor border-2 py-1 md:w-24 h-10 rounded-lg text-lg hover:bg-green-400 hover:text-white hover:border-green-400 ${
               activeTab === "Chinese"
                 ? "bg-green-400 outline-none text-white"
                 : ""
             }`}
           >
             Chinese
           </button>
         </div>
       </section>

       <section className="flex flex-row flex-wrap">
         {category
           .filter((name) => {
             if (query === "") {
               return name;
             } else if (
               name.name.toLowerCase().includes(query.toLowerCase())
             ) {
               return name;
             }
           })
           .map((item) => (
             <Cards key={item.id} item={item} handleClick={handleClick} />
           ))}
       </section>
     </section>
   </>
 );
}

export default Details;