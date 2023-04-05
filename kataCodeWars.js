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

function changeMe(moneyIn) {
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

//ANSWER

function joinStrings(string1, string2) {
  // code here
  return `${string1.toString()} ${string2.toString()}`
}

// Practice 17

// In this kata, we will make a function to test whether a period is late.

// Our function will take three parameters:

// last - The Date object with the date of the last period

// today - The Date object with the date of the check

// cycleLength - Integer representing the length of the cycle in days

// Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.

//ANSWER

function periodIsLate(last, today, cycleLength) {
  return ((today - last) / 86400000) > cycleLength ? true : false
}

// Practice 18

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

//ANSWER

function reverseWords(str) {
  return str.split("").reverse().join("").split(" ").reverse().join(" ")
};



// Practice 19

// Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.

// For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

// If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.

// Good luck :)

//ANSWER

function nearestSq(n) {
  let i, j;
  for (i = j = n; Math.sqrt(i) % 1 != 0 && Math.sqrt(j) % 1 != 0; i++, j--);
  return Math.sqrt(i) % 1 == 0 ? i : j
}

// Practice 20

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

//ANSWER

function boolToWord(bool) {
  //...
  return bool ? "Yes" : "No"
}

// Practice 21

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

//ANSWER

function sumMix(x) {
  let sum = 0
  for (let val of x) {
    if (typeof val === "string") {
      sum += Number(val)
    } else {
      sum += val
    }
  }
  return sum
}

//OR

function sumMix(x) {
  return x.map(a => +a).reduce((a, b) => a + b);
}

//OR

const sumMix = x => x.reduce((a, b) => +b + a, 0)


// Practice 22
// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= length of input <= 100

// All inputs will be strings, consisting only of characters ( and ).
// Empty strings are considered balanced (and therefore valid), and will be tested.
// For languages with mutable strings, the inputs should not be mutated.

// Protip: If you are trying to figure out why a string of parentheses is invalid, paste the parentheses into the code editor, and let the code highlighting show you!

//ANSWER

function validParentheses(parenStr) {
  // Your code here
  let n = 0;
  for (let i = 0; i < parenStr.length; i++) {
    if (parenStr[i] == '(') n++;
    if (parenStr[i] == ')') n--;
    if (n < 0) return false;
  }

  return n == 0;
}


//Practice 23
// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.

// ANSWER

// Sum Numbers
function sum(numbers) {
  "use strict";
  let sum = 0
  for (let num of numbers) {
    if (num) {
      console.log(num)
      sum += num
    }
  }
  return sum
};

// OR

function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}


//Practice 24

// The male gametes or sperm cells in humans and other mammals are heterogametic and contain one of two types of sex chromosomes. They are either X or Y. The female gametes or eggs however, contain only the X sex chromosome and are homogametic.

// The sperm cell determines the sex of an individual in this case. If a sperm cell containing an X chromosome fertilizes an egg, the resulting zygote will be XX or female. If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.

// Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.

// If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";

// ANSWER

function chromosomeCheck(sperm) {
  return (sperm === "XY") ? "Congratulations! You're going to have a son." : "Congratulations! You're going to have a daughter."
}

//OR

function chromosomeCheck(sperm) {
  return `Congratulations! You're going to have a ${sperm === 'XY' ? 'son' : 'daughter'}.`
}


//Practice 25

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3


//ANSWER

function stray(numbers) {
  return numbers.find((e) => numbers.filter((v) => v === e).length === 1);
}

// OR

const stray = nums => nums.reduce((a, b) => a ^ b);

// OR

function stray(numbers) {
  for (var i in numbers) {
    if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) { return numbers[i] }
  }
}

//Practice 26

// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)

// ANSWER

function hero(bullets, dragons) {
  //Get Coding!
  return ((dragons * 2) <= bullets) ? true : false;
}

//Practice 27

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// ANSWER

function descendingOrder(n) {
  //...
  let nString = `${n}`
  return Number(nString.split("").sort(function (a, b) { return b - a }).join(""))
}

// OR

function descendingOrder(n) {
  return parseInt(String(n).split('').sort().reverse().join(''))
}

//Practice 28

// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0
// Waiting for translations and Feedback! Thanks!

// ANSWER

function paperwork(n, m) {
  return (n < 0 || m < 0) ? 0 : (n * m);
}


//Practice 29

// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
// As usual, your function/method should be pure, i.e. it should not mutate the original string.

// ANSWER

String.prototype.toAlternatingCase = function () {
  return this.split("").map(a => a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()).join('')
}

//Practice 30

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// ANSWER

function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter((x) => typeof x !== "string")
}

// Practice 31

// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

// ANSWER

function openOrSenior(data) {
  // ...
  let ans = []
  for (let index of data) {
    if (index[0] >= 55 && index[1] > 7) {
      ans.push("Senior")
    } else {
      ans.push("Open")
    }
  }
  return ans;
}

// Practice 32

// Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

// ANSWER

function SeriesSum(n) {
  let ans = 0;
  let num = 1;
  for (let i = 0; i < n; i += 1) {
    if (i === 0) {
      ans = 1;
    } else {
      num += 3;
      ans += (1 / num);
    }
  }
  return ans.toFixed(2);
};


// Practice 33

// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

// ANSWER

function divCon(x) {
  let sumOfString = 0
  let sumOfNumbers = 0
  for (let num of x) {
    if (typeof num === "string") {
      sumOfString += Number(num)
    } else if (typeof num === "number") {
      sumOfNumbers += num
    }
  }
  return (sumOfNumbers - sumOfString)
}

// Practice 34
// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

// ANSWER

function getAge(inputString) {
  // return the girl's correct age as an integer. Happy coding :) 
  return parseInt(inputString.split(" ")[0])
}

//Practice 35

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

//ANSWER

function solution(str) {
  return str.split("").reverse().join("")
}

//Practice 36

// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

//ANSWER

function isTriangle(a, b, c) {
  return (a + b > c && b + c > a && c + a > b) ? true : false;
}

//Practice 37

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

//ANSWER

function solution(str, ending) {
  // TODO: complete
  return str.endsWith(ending)
}

//Practice 38

// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]

//ANSWER

function greet(name) {
  //your code here
  return `Hello, ${name} how are you doing today?`
}

//Practice 39

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

//ANSWER

function getMiddle(s) {
  //Code goes here!
  let ans = ""
  if (s.length % 2 !== 0) {
    ans = s.split("")[Math.floor(s.length / 2)]
  } else {
    ans += s.split("")[Math.floor((s.length / 2) - 1)] + s.split("")[Math.floor(s.length / 2)]
  }
  return ans;
}

//OR

function getMiddle(s) {
  let middle = s.length / 2;
  return (s.length % 2)
    ? s.charAt(Math.floor(middle))
    : s.slice(middle - 1, middle + 1);
}

// Practice 40

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// ANSWER

function fakeBin(x) {
  let ans = ""
  for (let val of x.split("")) {
    if (val < 5) {
      ans += "0"
    } else {
      ans += "1"
    }
  }
  return ans;
}

//OR

function fakeBin(x) {
  return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

//OR

function fakeBin(x) {
  return x.replace(/\d/g, d => d < 5 ? 0 : 1);
}


// Practice 41

// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.

// ANSWER

function friend(friends) {
  //your code here
  return friends.filter((x) => x.length === 4)
}

// Practice 42

// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

// ANSWER

function getGrade(s1, s2, s3) {
  // Code here
  let avgSum = (s1 + s2 + s3) / 3
  if (avgSum >= 90) {
    return 'A'
  } else if (avgSum >= 80) {
    return 'B'
  } else if (avgSum >= 70) {
    return 'C'
  } else if (avgSum >= 60) {
    return 'D'
  } else {
    return 'F'
  }
}

// OR

function getGrade(s1, s2, s3) {
  var s = (s1 + s2 + s3) / 3
  return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
}


// Practice 43

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// ANSWER

function isPangram(string) {

  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let result = [];

  string.toLowerCase().replace(/\w/g, (str) => {
    str.split('').reduce((acc, cur) => {
      return !result.includes(cur)
        && alphabet.includes(cur)
        && result.push(cur);
    }, '');
  })

  return alphabet.join('') === result.sort().join('');
}


// Practice 44

// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

//ANSWER

function past(h, m, s) {
  //#Happy Coding! ^_^
  return h * 3600000 + m * 60000 + s * 1000;
}

// Practice 45

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

//ANSWER

function countPositivesSumNegatives(input) {
  // your code here
  let positiveSum = 0
  let negativeSum = 0
  if (input === null || input.length === 0) {
    return [];
  } else {
    input.forEach((num) => num > 0 ? positiveSum++ : negativeSum += num)
  }
  return [positiveSum, negativeSum]
}


// Practice 46

// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.


//ANSWER

function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  let dnaArr = ""
  for (let val of dna.split("")) {
    if (val === "T") {
      dnaArr += "U"
    } else {
      dnaArr += val
    }
  }
  return dnaArr
}

//OR

function DNAtoRNA(dna) {
  return dna.replace(/T/g, 'U');
}


// Practice 47

// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

//ANSWER

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let smallestInt = args[0]
    for (let arg of args) {
      if (arg < smallestInt) {
        smallestInt = arg
      }
    }
    return smallestInt
  }
}

//OR

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}


// Practice 48

// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).

//ANSWER

function insertDash(num) {
  let ans = []
  num = num.toString().split('')

  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 !== 0 && num[i + 1] % 2 !== 0) {
      ans.push(num[i])
      ans.push('-')
    }
    else {
      ans.push(num[i])
    }
  }

  if (ans[ans.length - 1] == '-') ans.pop()
  return ans.join("")
}

// Practice 49

// Given an array of numbers, return the difference between the largest and smallest values.

// For example:

// [23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).

// [1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).

// The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow.

//ANSWER

function betweenExtremes(numbers) {
  //write your code here
  let max = Math.max(...numbers)
  let min = Math.min(...numbers)
  return (max - min)
}

//OR

function betweenExtremes(numbers) {
  return Math.max(...numbers) - Math.min(...numbers);
}


// Practice 50

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

//ANSWER

function likes(names) {
  // TODO
  if (names.length === 0) {
    return "no one likes this"
  } else if (names.length === 1) {
    return `${names[0]} likes this`
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }
}

// Practice 51

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//ANSWER

function evenOrOdd(number) {
  return (number % 2 === 0) ? "Even" : "Odd"
}
