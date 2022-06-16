import { render, screen } from '@testing-library/react';
import { server, rest } from 'mocks/server';
import React from 'react';
import { MainView } from './Main';

describe('Integration: MainView', () => {
  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2022-01-01'));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should match the snapshot', () => {
    const { asFragment } = render(<MainView />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should fetch API data', async () => {
    render(<MainView />);

    const data = await screen.findByText('{"id":2,"fullname":"John Doe"}');

    expect(data).toBeInTheDocument();
  });

  it('should render error when API call fails', async () => {
    server.use(
      rest.get('https://run.mocky.io/v3/bf2b59c6-bd8f-4fbe-9fda-21e686930673', async (_, res, ctx) =>
        res.once(ctx.status(403), ctx.text('User does not exist' ))
      )
    );
    
    render(<MainView />);

    const error = await screen.findByText('User does not exist');

    expect(error).toBeInTheDocument();
  });
});
