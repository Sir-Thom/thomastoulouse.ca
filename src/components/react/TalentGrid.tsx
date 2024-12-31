import { getURLFormReact, useTranslations } from "../../i18n/utils";
const lang = getURLFormReact();
const t = useTranslations(lang);
import type { IContent } from "../../interfaces/ICard";
import React, { useMemo, useState } from "react";

interface TalentGridProps {
	content: IContent[];
}

export default function TalentGrid({ content }: TalentGridProps) {
	return (
		<section className="py-8">
			<h2 className="mb-6 text-center text-3xl font-bold">Talents</h2>
			<div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
				{content.map((skill, index) => (
					<div
						key={index}
						className="mb-2 scale-100 rounded-lg bg-light-400 p-6 shadow-lg shadow-LapisLazuli-800 transition-all hover:bg-light-500 active:scale-90 dark:bg-dark-600 hover:dark:bg-dark-700"
					>
						<img src={skill.image} alt={skill.title} className="mb-4 h-16 w-16 object-contain" />
						<h3 className="text-lg font-medium">{skill.title}</h3>
					</div>
				))}
			</div>
		</section>
	);
}
