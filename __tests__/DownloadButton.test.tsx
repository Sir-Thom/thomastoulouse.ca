// DownloadButton.test.tsx

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DownloadButton from "../src/components/react/DownloadButton";

// Mock Firebase and its methods
const mockGetDownloadURL = jest.fn(() => Promise.resolve("mockDownloadUrl"));
const mockStorageRef = jest.fn(() => ({ getDownloadURL: mockGetDownloadURL }));
const mockStorage = { ref: mockStorageRef };
const mockInitializeApp = jest.fn();
const mockApp = { delete: jest.fn() };
const mockFirebase = {
	initializeApp: mockInitializeApp,
	apps: [],
	storage: () => mockStorageRef(),
	app: () => mockApp
};

jest.mock("../src/i18n/utils.ts", () => ({
	getURLFormReact: () => "en", // Adjust the language if needed
	useTranslations: () => (key: string) => key // Basic mock for translation
}));
// Mock Firebase app import
jest.mock("firebase/app", () => mockFirebase);

describe("DownloadButton", () => {
	const mockProps = {
		VITE_FIREBASE_API_KEY: "",
		VITE_FIREBASE_AUTH_DOMAIN: "",
		VITE_FIREBASE_PROJECT_ID: "",
		VITE_FIREBASE_STORAGE_BUCKET: "",
		VITE_FIREBASE_MESSAGING_SENDER_ID: "",
		VITE_FIREBASE_APP_ID: "",
		VITE_FIREBASE_MEASUREMENT_ID: ""
	};
	beforeEach(() => {
		// Clear the mocks and spies before each test
		jest.clearAllMocks();
	});

	it("downloads file when button is clicked", async () => {
		render(<DownloadButton {...mockProps} />);
		await screen.findByText("btn.downloadcv");

		const downloadButton = screen.getByRole("button", { name: "btn.downloadcv" });

		// Mock a fake download URL
		mockGetDownloadURL.mockResolvedValueOnce("mockDownloadUrl");

		// Spy on the appendChild and removeChild methods
		const appendChildSpy = jest.spyOn(document.body, "appendChild");
		const removeChildSpy = jest.spyOn(document.body, "removeChild");

		// Click the download button
		fireEvent.click(downloadButton);

		// Assert that download link creation and click were attempted
		expect(appendChildSpy).toHaveBeenCalledTimes(1);
		expect(removeChildSpy).toHaveBeenCalledTimes(1);

		// ... additional assertions related to link properties can be added ...
	});
});
