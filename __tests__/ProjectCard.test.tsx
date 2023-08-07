import React from "react";

import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import ProjectCard from "../src/components/react/ProjectCard";
/**
 * @jest-environment jsdom
 */
test("renders ProjectCard component with provided props", () => {
	const props = {
		title: "Test Project",
		description: "This is a test project.",
		imageUrl: "test-image.jpg",
		imageUrlSmall: "test-image-small.jpg",
		Url: "https://example.com"
	};

	const { getByText, getByAltText } = render(<ProjectCard {...props} />);
});
