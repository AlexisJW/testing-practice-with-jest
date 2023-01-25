const capitalize = require('./capitalize.js');

it('should capitalize a string', () => {
  expect(capitalize('hello')).toBe('Hello');
});