import React from "react";

const CardList = ({ cards, currentCard }) => {
  return (
    <div className="flex flex-grow h-auto bg-dark-600 rounded-lg shadow-md p-6 border-dark-50 border-2 items-center justify-between gap-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`w-full p-4 ${index === currentCard ? "flex" : "hidden"}`}
        >
          <div className="flex flex-wrap ">
            <img
              src={card.image}
              alt={card.title}
              className="w-32 h-32  object-contain float-left mx-4 "
            />
            <h2 className="text-xl  mt-2 ml-5 font-semibold">{card.title}</h2>
            <p className=" text-neutral-200 text-lg break-after-left mt-10 ml-5 mr-5">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
