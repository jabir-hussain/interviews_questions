const cloudGame = require('./index.js');

describe('Cloud Game', () => {
  it('Test Case 1', () => {
    expect(cloudGame([0, 1, 0, 0, 0, 1, 0])).toBe(3);
  });
  it('Test Case 2', () => {
    expect(cloudGame([0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0])).toBe(6);
  });
});
