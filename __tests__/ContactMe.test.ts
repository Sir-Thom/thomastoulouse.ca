import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactMe from "../src/components/react/ContactMe"; // Adjust the relative path based on your folder structure

// Mock the useTranslations function
jest.mock("../src/i18n/utils", () => ({
	getURLFormReact: jest.fn(),
	useTranslations: () => ({
		"btn.contactme": "Contact Me"
	})
}));

describe("ContactMe Component", () => {
	it("renders correctly", () => {
		render(ContactMe());
		expect(document.body).toMatchSnapshot();
	});

	it("triggers email link onClick", () => {
		const { getByText } = render(ContactMe());
		const button = ContactMe().type("button");
		fireEvent.click(button);
		expect(window.location.href).toBe(
			"mailto:Sir-Thom1702@proton.me?subject=Offre de stage/Emplois"
		);
	});
});
