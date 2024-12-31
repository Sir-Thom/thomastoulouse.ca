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
    render(<DownloadButton />);
    const button = screen.getByText('Download CV');
    expect(button)
  });

  
});
