export interface ICard {
	title: string;
	description: string;
	image: string;
}

export interface IContent {
	content: ICard[];
}
export interface ICardProps {
	cards: ICard[];
	currentCard: number;
}
