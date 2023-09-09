import React, { useState } from "react";
import Cards from "./Cards";
import { list } from "../data";
import { FaSearch } from "react-icons/fa";

interface DetailsProps {
  handleClick: (item: any) => void;
}

function Details({ handleClick }: DetailsProps) {
  const [category, setCategory] = useState(list);
  const [activeTab, setActiveTab] = useState("All");

  // Search functionality
  const [query, setQuery] = useState("");

  // Filtering functionality
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
        <section className="px-4 md:px-6 flex flex-col md:flex-row justify-between">
          <div className="relative w-full md:w-80 h-11 mt-4 mb-4 md:mb-0 ">
            <input
              type="text"
              onChange={(event) => setQuery(event.target.value)}
              className="w-full h-full py-2 md:py-4 px-4 md:px-10 text-base text-black rounded-lg border-2 border-black pl-10"
              placeholder="Search food..."
            />
            <i className=" absolute left-2 top-2 md:left-4 pt-1 md:top-6 text-lg w-4 h-4 text-center text-black focus:outline-none">
              <FaSearch />
            </i>
          </div>

          <div className="flex flex-wrap mt-4 md:mt-0">
            <button
              value="All"
              onClick={() => handleBtns("All")}
              className={`mr-2 mb-2 text-brandColor border-brandColor border-2 py-1 px-3 md:px-6 md:w-24 h-10 rounded-lg text-base md:text-lg ${
                activeTab === "All" ? "bg-green-400 outline-none text-white" : ""
              }`}
            >
              All
            </button>
            <button
              value="African"
              onClick={() => handleBtns("African")}
              className={`mr-2 mb-2 text-brandColor border-brandColor border-2 py-1 px-3 md:px-6 md:w-24 h-10 rounded-lg text-base md:text-lg ${
                activeTab === "African" ? "bg-green-400 outline-none text-white" : ""
              }`}
            >
              African
            </button>
            <button
              value="American"
              onClick={() => handleBtns("American")}
              className={`mr-2 mb-2 text-brandColor border-brandColor border-2 py-1 px-3 md:px-6 md:w-24 h-10 rounded-lg text-base md:text-lg ${
                activeTab === "American" ? "bg-green-400 outline-none text-white" : ""
              }`}
            >
              American
            </button>
            <button
              value="Chinese"
              onClick={() => handleBtns("Chinese")}
              className={`mr-2 mb-2 text-brandColor border-brandColor border-2 py-1 px-3 md:px-6 md:w-24 h-10 rounded-lg text-base md:text-lg ${
                activeTab === "Chinese" ? "bg-green-400 outline-none text-white" : ""
              }`}
            >
              Chinese
            </button>
          </div>
        </section>

        <section className="flex flex-col mt-4 md:mt-0">
          {category
            .filter((name) => {
              if (query === "") {
                return true; // Return true when the query is empty
              } else {
                return name.name.toLowerCase().includes(query.toLowerCase());
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
