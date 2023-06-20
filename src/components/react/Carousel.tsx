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
			carouselContainerRef.current?.removeEventListener("keydown", handleKeydown);
		};
	}, []);

	const handleNext = () => {
		setCurrentCard((prevCard) => (prevCard + 1) % content.length);
	};

	const handlePrev = () => {
		setCurrentCard((prevCard) => (prevCard - 1 + content.length) % content.length);
	};

	return (
		<div ref={carouselContainerRef} tabIndex={0} className="relative focus:outline-none">
			<div className="flex justify-center sm:w-32 lg:w-[42rem]">
				<button
					aria-label="Previous card"
					className="absolute left-0 top-1/2  mr-4 -translate-y-1/2 transform rounded-full  transition-all duration-300 hover:scale-110 active:scale-90"
					onClick={handlePrev}
				>
					<MdOutlineNavigateBefore size={48} className="stroke-current  left--4 mr-4" />
				</button>
				<button
					aria-label="Next card"
					className="absolute right-0 top-1/2 mr-4 -translate-y-1/2 transform rounded-full   transition-all duration-300 hover:scale-110 active:scale-90"
					onClick={handleNext}
				>
					<MdOutlineNavigateNext
						size={48}
						className="ml-4 stroke-white transition-colors hover:stroke-DigitalOceanBlue-50 active:stroke-DigitalOceanBlue-100"
					/>
				</button>
			</div>
			<div className="flex h-auto w-auto items-center justify-center">
				<CardList cards={content} currentCard={currentCard} />
			</div>
		</div>
	);
}

export default Carousel;
