const reverseString = require('./reverseString.js');

it('reverses a string', () => {
  expect(reverseString('hello')).toBe('olleh');
});