import { motion } from "framer-motion";
import type { ICardProps } from "../../interfaces/ICard";
import React from "react";

function CardList({ cards, currentCard }: ICardProps) {
	return (
		<div className="bg-light-400 shadow-lapis-lazuli-800 dark:border-dark-50 dark:bg-dark-600 flex h-auto flex-grow items-center justify-between gap-4 rounded-lg border-2 p-6 shadow-lg">
			{cards.map((card, index) => (
				<motion.div
					key={index}
					className={`w-full p-4 ${index === currentCard ? "flex" : "hidden"}`}
					initial={{ opacity: 0, x: -20 }}
					animate={{
						opacity: index === currentCard ? 1 : 0,
						x: index === currentCard ? 0 : -20
					}}
					transition={{ duration: 0.4 }}
				>
					<div className="flex flex-wrap">
						<img
							src={card.image}
							alt={card.title}
							className="float-left mx-4 h-32 w-32 object-contain"
							loading="lazy"
							decoding="async"
						/>
						<h2 className="mt-2 ml-5 text-xl font-semibold text-black dark:text-white">
							{card.title}
						</h2>
						<p className="mt-10 mr-5 ml-5 break-after-left text-lg text-black dark:text-white">
							{card.description}
						</p>
					</div>
				</motion.div>
			))}
		</div>
	);
}
export default React.memo(CardList);
