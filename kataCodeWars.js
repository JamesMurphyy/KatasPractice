//Practice 1
/*

Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
*/

//ANSWER
function century(year) {
  return Math.ceil(year / 100); //using ceiling method to round up to nearest century (100)
}

//Practice 2
/*

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F


*/

//ANSWER

function abbrevName(name) {
  let in1 = "";
  let in2 = "";

  in1 = name[0];
  for (let i = 0; i <= name.length; i++) {
    if (name[i] == " ") {
      in2 = name[i + 1];
    }
  }
  return `${in1.toUpperCase()}.${in2.toUpperCase()}`;
}

//Practice 3
/*

In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . 

If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. 

The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

*/

//ANSWER

function findMultiples(integer, limit) {
  let arr = [];
  for (let i = 1; i <= limit; i++) {
    if (i % integer === 0) {
      arr.push(i);
    }
  }
  return arr;
}


//Practice 4
/*

We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.


Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7

*/

//ANSWER

const stringToNumber = function(str){
  // put your code here
  return Number(`${str}`);
}


//Practice 5
/*

Write a generic function chainer

Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for Ruby).

The input for each function is the output of the previous function (except the first function, which takes the starting value as its input). Return the final value after execution is complete.

////////////Example/////////////////

function add(num) {
  return num + 1;
}

function mult(num) {
  return num * 30;
}

chain(2, [add, mult]);
// returns 90;

*/

//ANSWER

function chain(input, fns) {
  // implement the "chain" function
    return fns.reduce(function(input, fn) {return fn(input)}, input)
  }
