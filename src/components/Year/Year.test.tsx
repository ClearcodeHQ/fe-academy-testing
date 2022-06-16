import { render, screen } from '@testing-library/react';
import React from 'react';
import { Year } from './Year';

describe('Year', () => {
    beforeAll(() => {
      jest.useFakeTimers();
      jest.setSystemTime(new Date('2022-01-01'));
    });

    afterAll(() => {
      jest.useRealTimers();
    });

    it('should match the snapshot', () => {
      const { asFragment } = render(<Year />);

      expect(asFragment()).toMatchSnapshot();
    });

    it('should render 2022 year',  () => {
      render(<Year />);

      const year = screen.getByText(/Year:/);

      expect(year).toHaveTextContent('Year: 2022');
    });
  });
