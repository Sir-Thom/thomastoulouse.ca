export interface IProjectCardProps {
	title: string;
	description: string;
	imageUrl: string;
	imageUrlSmall: string;
	Url: string;
	languages: string[];
}
export interface IProject {
	id: number;
	title: string;
	description: string;
	imageUrl: string;
	imageUrlSmall: string;
	url: string;
	languages: string[];
}

export interface IProjectListProps {
	projects: IProject[];
}
