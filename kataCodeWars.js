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

const stringToNumber = function (str) {
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
  return fns.reduce(function (input, fn) { return fn(input) }, input)
}





//Practice 6
/*
Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).

////////////Example/////////////////

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]

*/

//ANSWER

function countBy(x, n) {
  var z = [];
  for (i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}


//Practice 7 

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

//ANSWER

function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let counter = 0
  arrayOfSheep.forEach(val => {
    if (val) counter++
  })
  return counter
}


//Practice 8

// Create a function that will trim a string (the first argument given) if it is longer than the requested maximum string length (the second argument given). The result should also end with "..."

// These dots at the end also add to the string length.

// For example, trim("Creating kata is fun", 14) should return "Creating ka..."

// If the string is smaller or equal than the maximum string length, then simply return the string with no trimming or dots required.

// e.g. trim("Code Wars is pretty rad", 50) should return "Code Wars is pretty rad"

// If the requested string length is smaller than or equal to 3 characters, then the length of the dots is not added to the string length.

// e.g. trim("He", 1) should return "H...", because 1 <= 3

// Requested maximum length will be greater than 0. Input string will not be empty.

//ANSWER

function trim(str, size) {
  if (str.length <= size) {
    return str
  }

  const result = str.slice(0, size)

  return `${result.length < 4 ? result : result.slice(0, -3)}...`
}

//Practice 9

//Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

//ANSWER

var greet = function (name) {
  let nameChanged = name.toLowerCase();
  return `Hello ${nameChanged.charAt(0).toUpperCase() + nameChanged.slice(1)}!`;
};

//Practice 10

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

//ANSWER

function repeatStr(n, s) {
  let ans = ""
  for (let i = 1; i <= n; i++) {
    ans += s
  }
  return ans;
}

//OR

function repeatStr(n, s) {
  return s.repeat(n);
}


// Practice 11

// Task:
// Your job here is to write a function (keepOrder in JS/CoffeeScript, keep_order in Ruby/Crystal/Python, keeporder in Julia), which takes a sorted array ary and a value val, and returns the lowest index where you could insert val to maintain the sorted-ness of the array. The input array will always be sorted in ascending order. It may contain duplicates.

// Do not modify the input.

// Some examples:
// keepOrder([1, 2, 3, 4, 7], 5) //=> 4
//                       ^(index 4)
// keepOrder([1, 2, 3, 4, 7], 0) //=> 0
//           ^(index 0)
// keepOrder([1, 1, 2, 2, 2], 2) //=> 2
//                 ^(index 2)


//ANSWER

function keepOrder(ary, val) {
  return ary.filter(x => x < val).length;
}

// Practice 11

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!


//ANSWER
function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let totalSumScores = 0
  let averageScore = 0
  let numberOfScores = 0

  classPoints.push(yourPoints)

  classPoints.forEach(x => {
    totalSumScores += x
    numberOfScores++
  })

  averageScore = (totalSumScores / numberOfScores)

  return ((yourPoints > averageScore) ? true : false)

}

// OR

function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
}

// Practice 12

// Classy Extensions
// Classy Extensions, this kata is mainly aimed at the new JS ES6 Update introducing extends keyword. You will be preloaded with the Animal class, so you should only edit the Cat class.
// Task
// Your task is to complete the Cat class which Extends Animal and replace the speak method to return the cats name + meows. e.g. 'Mr Whiskers meows.'
// The name attribute is passed with this.name (JS), @name (Ruby) or self.name (Python).

// Reference: JS, Ruby, Python.

//ANSWER

class Cat extends Animal {
  speak() {
    return `${this.name} meows.`
  }
}

// Practice 13

// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
// Link to Jaden's former Twitter account @officialjaden via archive.org

//ANSWER

String.prototype.toJadenCase = function () {
  return this.split(" ").map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}

// Practice 14

// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

//ANSWER

function smash(words) {
  let ans = ""
  for (let word of words) {
    ans += word + " "
  }
  return ans.trim()
};

// OR

function smash(words) {
  return words.join(" ")
};

//Practice 14
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

//ANSWER

function sumTwoSmallestNumbers(numbers) {
  //Code here
  let sorted = numbers.sort((a, b) => a - b)
  sorted.filter((x) => {
    x > 0
  })
  return (sorted[0] + sorted[1])
}

// Practice 15

// Your task is to create a change machine.

// The machine accepts a range of specified coins and notes, it returns change in 20p and 10p coins in the minimum amount of pieces. A 50p for example would return two 20p pieces and one 10p piece. The machine will always try and return change, if you input a 20p for example it will return "10p 10p".

// The machine accepts these coins and notes: £5, £2, £1, 50p, 20p. Any coins and notes which are not accepted by the machine will be returned. If you were to put a £20 note into the machine for example, it would be returned to you and not broken into change.

// This change machine is programmed to accept and distribute strings rather than numbers. The change will be returned as one string with the change separated by single spaces & no commas. The values of the string will be descending.

//ANSWER

function changeMe(moneyIn){
	switch (moneyIn) {
  	case '£5': return '20p '.repeat(25).trim()
  	case '£2': return '20p '.repeat(10).trim()
  	case '£1': return '20p '.repeat(5).trim()
  	case '50p': return '20p 20p 10p'
  	case '20p': return '10p 10p'
    default: return moneyIn
  }
}

// Practice 16

// It is easy to join two strings together like this string1 + string2.

// Another way to get the desired result would be with string1.concat(string2)

// ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.

// + , .concat() & .join() will not be allowed in this exercise. I have also removed some other methods that can be used to cheat!

// If one of the arguments is a number your code must coerce it into being a string.