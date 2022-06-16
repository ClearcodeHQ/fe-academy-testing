import { sum } from './sum';

describe('sum', () => {
  it('should sum two values correctly', () => {
    expect(sum(1,1)).toEqual(2);
  });
});
