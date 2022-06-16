import { Counter } from 'components/Counter';
import { Year } from 'components/Year';
import React from 'react';
import { useFetch } from 'utils/useFetch';

export const MainView = () => {
  const { loading, error, data } = useFetch('https://run.mocky.io/v3/bf2b59c6-bd8f-4fbe-9fda-21e686930673');

  const renderData = (): React.ReactNode => {
    if (loading) {
      return <span>Fetching data...</span>;
    }

    if (error) {
      return <span>{error}</span>;
    }

    return <code>{data}</code>;
  };

  return (
    <>
      <Year />
      <Counter />
      <p>
        {renderData()}
      </p>
    </>
  );
};
