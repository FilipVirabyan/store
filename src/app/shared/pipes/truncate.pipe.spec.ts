import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {
  let pipe: TruncatePipe;

  beforeEach(() => {
    pipe = new TruncatePipe();
  });

  it('should truncate the string if it exceeds the limit', () => {
    const input = 'Lorem ipsum dolor sit amet';
    const limit = 10;
    const expectedOutput = 'Lorem ipsu...';

    const result = pipe.transform(input, [limit]);

    expect(result).toBe(expectedOutput);
  });

  it('should not truncate the string if it does not exceed the limit', () => {
    const input = 'Short string';
    const limit = 20;

    const result = pipe.transform(input, [limit]);

    expect(result).toBe(input);
  });

  it('should use the provided trail when truncating', () => {
    const input = 'Very long string';
    const limit = 5;
    const trail = '***';
    const expectedOutput = 'Very ***';

    const result = pipe.transform(input, [limit, trail]);

    expect(result).toBe(expectedOutput);
  });
});
