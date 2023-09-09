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
    <>
      <section className="flex flex-col md:flex-row px-2 py-2 md:px-6 md:py-4 lg:w-1/4 w-full">
        <div className="p-2 md:w-1/2 w-full mb-4">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-auto">
            <img
              className="md:h-48 h-36 w-full object-cover object-center"
              src={img}
              alt="item"
            />
            <div className="px-2 py-2 md:px-3 md:py-2">
              <h1 className="text-base md:text-lg lg:text-xl font-bold mb-2 md:mb-3">
                {name}
              </h1>
              <div className="flex flex-wrap justify-between mb-2 mt-2 md:mt-4">
                <p className="leading-relaxed mt-2 md:mt-4 text-sm md:text-base lg:text-lg">
                  Price: NGN{price}
                </p>
                <button
                  onClick={() => handleClick(item)}
                  className="bg-green-400 text-white py-2 px-2 md:px-3 text-sm md:text-base lg:text-lg rounded-xl hover:border-2 hover:bg-green-800 hover:text-brandColor hover:border-brandColor"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
