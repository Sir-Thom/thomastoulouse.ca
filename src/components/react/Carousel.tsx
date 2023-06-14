import React, { useState } from "react";
import CardList from "./CardSkillList";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

const Carousel = ({ content }) => {
  const [currentCard, setCurrentCard] = useState(0);

  const handleNext = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % content.length);
  };

  const handlePrev = () => {
    setCurrentCard(
      (prevCard) => (prevCard - 1 + content.length) % content.length
    );
  };

  return (
    <div className="relative">
      <div className="flex lg:w-[42rem] sm:w-32 justify-center">
        <button
          aria-label="Previous card"
          className="absolute mr-4 left-0 top-1/2 transform -translate-y-1/2 rounded-full hover:bg-neutral-300 focus:bg-neutral-300 transition-colors duration-300"
          onClick={handlePrev}
          // Add margin to create space between buttons
        >
          <MdOutlineNavigateBefore
            size={48}
            className="stroke-current mr-4 left--4"
          />
        </button>
        <button
          aria-label="Next card"
          className="absolute mr-4 right-0 top-1/2 transform -translate-y-1/2 rounded-full hover:bg-neutral-300 focus:bg-neutral-300 transition-colors duration-300"
          onClick={handleNext}
        >
          <MdOutlineNavigateNext size={48} className="stroke-current ml-4 " />
        </button>
      </div>
      <div className=" flex   items-center justify-center h-auto w-auto">
        {" "}
        <CardList cards={content} currentCard={currentCard} />
      </div>
    </div>
  );
};

export default Carousel;
