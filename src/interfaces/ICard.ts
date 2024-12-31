export interface ICard {
	title: string;
	description: string;
	image: string;
}

export interface IContent {
    image: string | undefined;
    title: string | undefined;
	content: ICard[];
}
export interface ICardProps {
	cards: ICard[];
	currentCard: number;
}
