import React from 'react';
import { useState } from 'react';
import { CounterProps } from './types';

export const Counter = ({ onIncrement, onDecrement }: CounterProps) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (onIncrement) {
      onIncrement();
    }
    setCount((prevState) => prevState + 1);
  };

  const decrement = () => {
    if (onDecrement) {
      onDecrement();
    }
    setCount((prevState) => prevState - 1);
  };

  return (
    <>
      <span>Counter</span>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <span>count: {count}</span>
    </>
  );
};
