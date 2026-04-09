/*
In this Kata we are passing a number (n) into a function.

Your code will determine if the number passed is even (or not).

The function needs to return either a true or false.

Numbers may be positive or negative, integers or floats.

Floats with decimal part non equal to zero are considered UNeven for this kata.
*/

function testEven(n) {
  return n % 2 === 0;
}

(testEven(0), true, "testEven for 0"); // should return true
(testEven(0.5), false, "testEven for 0.5"); // should return false
(testEven(1), false, "testEven for 1"); // should return false
