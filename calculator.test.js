const { add, subtract, multiply, divide } = require('./calculator');

// Base testcases
test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtracts 5 - 3 to equal 2', () => {
  expect(subtract(5, 3)).toBe(2);
});

test('multiplies 3 * 4 to equal 12', () => {
  expect(multiply(3, 4)).toBe(12);
});

test('divides 6 / 2 to equal 3', () => {
  expect(divide(6, 2)).toBe(3);
});

test('throws error when dividing by zero', () => {
  expect(() => divide(6, 0)).toThrow("Cannot divide by zero");
});

// Added additional addition test case. (Should success)
test('adds 1 + 3 to equal 4', () => {
    expect(add(1, 3)).toBe(4);
  });

// Added additinal subtract test case. (Should fail)
  test('subtracts 5 - 3 to equal 1', () => {
    expect(subtract(5, 3)).toBe(1);
  });