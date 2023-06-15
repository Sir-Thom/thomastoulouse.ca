import { useState, useEffect, useRef } from "react";
import CardList from "./CardSkillList";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

type Card = {
  title: string;
  description: string;
};

type Content = {
  content: any;
};

function Carousel(CarouselProps: Content) {
  const { content } = CarouselProps;
  const [currentCard, setCurrentCard] = useState(0);
  const carouselContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrev();
      }
    };

    carouselContainerRef.current?.addEventListener("keydown", handleKeydown);

    return () => {
      carouselContainerRef.current?.removeEventListener(
        "keydown",
        handleKeydown
      );
    };
  }, []);

  const handleNext = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % content.length);
  };

  const handlePrev = () => {
    setCurrentCard(
      (prevCard) => (prevCard - 1 + content.length) % content.length
    );
  };

  return (
    <div
      ref={carouselContainerRef}
      tabIndex={0}
      className="relative focus:outline-none"
    >
      <div className="flex lg:w-[42rem] sm:w-32 justify-center">
        <button
          aria-label="Previous card"
          className="absolute mr-4 left-0  top-1/2 transform -translate-y-1/2 rounded-full  hover:scale-110 active:scale-90 transition-all duration-300"
          onClick={handlePrev}
        >
          <MdOutlineNavigateBefore
            size={48}
            className="stroke-current  mr-4 left--4"
          />
        </button>
        <button
          aria-label="Next card"
          className="absolute mr-4 right-0 top-1/2 transform -translate-y-1/2 rounded-full   hover:scale-110 active:scale-90 transition-all duration-300"
          onClick={handleNext}
        >
          <MdOutlineNavigateNext
            size={48}
            className="transition-colors hover:stroke-DigitalOceanBlue-50 active:stroke-DigitalOceanBlue-100 stroke-white ml-4"
          />
        </button>
      </div>
      <div className="flex items-center justify-center h-auto w-auto">
        <CardList cards={content} currentCard={currentCard} />
      </div>
    </div>
  );
}

export default Carousel;
