import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Counter } from './Counter';

describe('Counter', () => {
    it('should match the snapshot', () => {
      const { asFragment } = render(<Counter />);

      expect(asFragment()).toMatchSnapshot();
    });

    it('should increment the count', async () => {
    render(<Counter />);

    const button = screen.getByRole('button', { name: /increment/ });

    const count = screen.getByText(/count/);

    expect(count).toHaveTextContent('count: 0');

    await userEvent.click(button);

    expect(count).toHaveTextContent('count: 1');
  });

  it('should call onIncrement function on counter increment', async () => {
    const onIncrement = jest.fn();

    render(<Counter onIncrement={onIncrement} />);

    const button = screen.getByRole('button', { name: /increment/ });

    await userEvent.click(button);

    expect(onIncrement).toBeCalledTimes(1);
  });

  it('should decrement the count', async () => {
    render(<Counter />);

    const button = screen.getByRole('button', { name: /decrement/ });

    const count = screen.getByText(/count/);

    expect(count).toHaveTextContent('count: 0');

    await userEvent.click(button);

    expect(count).toHaveTextContent('count: -1');
  });

  it('should call onDecrement function on counter decrement', async () => {
    const onDecrement = jest.fn();

    render(<Counter onDecrement={onDecrement} />);

    const button = screen.getByRole('button', { name: /decrement/ });

    await userEvent.click(button);

    expect(onDecrement).toBeCalledTimes(1);
  });
});
