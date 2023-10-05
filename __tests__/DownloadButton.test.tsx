import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DownloadButton from '../src/components/react/DownloadButton';

// Mock the required dependencies
jest.mock('../src/i18n/utils', () => ({
  useTranslations: (): ((key: string) => string) => {
    const translations: { [key: string]: string } = {
      'btn.downloadcv': 'Download CV',
    };
    return (key) => translations[key];
  },
  getURLFormReact: (): string => 'en', // Mock the language to 'en'
}));



describe('DownloadButton', () => {
  it('renders the button with the correct text', () => {
    render(<DownloadButton DOWNLOAD_URL="http://example.com" />);
    const button = screen.getByText('Download CV');
    expect(button)
  });

  it('calls handleDownload when the button is clicked', () => {
    const DOWNLOAD_URL = 'http://example.com';
    render(<DownloadButton DOWNLOAD_URL={DOWNLOAD_URL} />);
    const button = screen.getByText('Download CV');

    const createElementSpy = jest.spyOn(document, 'createElement');
    const appendChildSpy = jest.spyOn(document.body, 'appendChild');
    const clickSpy = jest.spyOn(HTMLElement.prototype, 'click');
    const removeChildSpy = jest.spyOn(document.body, 'removeChild');

    fireEvent.click(button);

    expect(createElementSpy).toHaveBeenCalledWith('a');
    expect(appendChildSpy).toHaveBeenCalled();
    expect(clickSpy).toHaveBeenCalled();
    expect(removeChildSpy).toHaveBeenCalled();

    createElementSpy.mockRestore();
    appendChildSpy.mockRestore();
    clickSpy.mockRestore();
    removeChildSpy.mockRestore();
  });
});
