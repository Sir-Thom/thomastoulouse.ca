import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import CardList from "./CardSkillList";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import type { IContent } from "../../interfaces/ICard";

function Carousel(CarouselProps: IContent) {
	const { content } = CarouselProps;
	const [currentCard, setCurrentCard] = useState(0);
	const carouselContainerRef = useRef<HTMLDivElement>(null);

	const workerRef = useRef<Worker | null>(null);

	useEffect(() => {
		// Initialize the Web Worker
		const worker = new Worker(new URL("./carouselWorker.ts", import.meta.url));

		workerRef.current = worker;

		return () => {
			// Terminate the Web Worker on unmount
			if (workerRef.current) {
				workerRef.current.terminate();
			}
		};
	}, []);

	const handleNext = useCallback(() => {
		if (workerRef.current) {
			workerRef.current.postMessage({ type: "next" });
		}
	}, []);

	const handlePrev = useCallback(() => {
		if (workerRef.current) {
			workerRef.current.postMessage({ type: "prev" });
		}
	}, []);

	useEffect(() => {
		const handleMessage = (e: MessageEvent) => {
			const { type } = e.data;

			if (type === "next") {
				setCurrentCard((prevCard) => (prevCard + 1) % content.length);
			} else if (type === "prev") {
				setCurrentCard((prevCard) => (prevCard - 1 + content.length) % content.length);
			}
		};

		if (workerRef.current) {
			workerRef.current.onmessage = handleMessage;
		}

		return () => {
			if (workerRef.current) {
				workerRef.current.onmessage = null;
			}
		};
	}, [content]);

	const cardListElement = useMemo(
		() => <CardList cards={content} currentCard={currentCard} />,
		[content, currentCard]
	);

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
			<div className="flex h-auto w-auto items-center justify-center">{cardListElement}</div>
		</div>
	);
}

export default Carousel;
