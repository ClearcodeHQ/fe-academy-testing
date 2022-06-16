import { rest } from 'msw';

interface UserResponse {
  id: number;
  fullname: string;
}

export const handlers = [
  rest.get<UserResponse>('https://run.mocky.io/v3/bf2b59c6-bd8f-4fbe-9fda-21e686930673', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json({ id: 2, fullname: 'John Doe' }));
  }),
];
