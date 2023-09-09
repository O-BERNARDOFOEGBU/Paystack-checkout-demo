import React from "react";

interface Item {
  name: string;
  price: number;
  img: string;
}

const Cards = ({
  item,
  handleClick,
}: {
  item: Item;
  handleClick: (item: Item) => void;
}) => {
  const { name, price, img } = item;

  return (
    <div className="lg:w-1/4 md:w-1/2 w-full p-2">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transition-transform transform hover:scale-105">
        <img
          className="h-48 w-full object-cover object-center"
          src={img}
          alt="item"
        />
        <div className="p-3">
          <h1 className="text-lg md:text-xl font-bold mb-2 md:mb-3">
            {name}
          </h1>
          <div className="flex flex-wrap justify-between mb-2 mt-2 md:mt-4">
            <p className="leading-relaxed mt-2 md:mt-4 text-base md:text-lg">
              Price: NGN{price}
            </p>
            <button
              onClick={() => handleClick(item)}
              className="bg-green-400 text-white py-2 px-2 md:px-3 text-base md:text-lg rounded-xl hover:border-2 hover:bg-green-800 hover:text-brandColor hover:border-brandColor"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
