const stringLength = require('./stringLength');
const reverseString = require('./reverseString');

test('String length = 9', () => {
  expect(stringLength('Rustamjon')).toBe(9);
});

test('the string is at least 1 character long', () => {
  expect(stringLength('')).toBe('string is empty');
});

test('the string is longer than 10 characters', () => {
  expect(stringLength('Rustamjon Tolipov')).toBe('string is too long');
});

test('the string is reversed', () => {
  expect(reverseString('ko')).toBe('ok');
});
