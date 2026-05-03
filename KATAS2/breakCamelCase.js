/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

function solution(string) {
  let ans = "";
  for (let i = 0; i <= string.length - 1; i++) {
    if (string[i] === string[i].toUpperCase() && string[i] !== "") {
      ans += ` ${string[i]}`;
    } else {
      ans += string[i];
    }
  }
  return ans;
}

function solution(string) {
  string = string.split("").map(function (el) {
    if (el === el.toUpperCase()) {
      el = " " + el;
    }
    return el;
  });
  return string.join("");
}

//Condensed upper function

const solution = (string) => {
  return [...string]
    .map((char) => {
      return char === char.toUpperCase() ? ` ${char}` : char;
    })
    .join("");
};

//Solution but using Regex

function solution(string) {
  return string.replace(/([A-Z])/g, " $1"); //Find any letter globally that are "A-Z" and uppercase, then with that value add a space to it
}

function solution(string) {
  return string.replace(/([a-z])([A-Z])/g, "$1 $2"); //Find any letter globally that are "a-z" lowercase and "A-Z" uppercase, then with that value add a space inbetween them - parentheis differentiate values $1, $2, $3 , etc..
}

const solution = (string) => string.replace(/[A-Z]/g, " $&"); // Better solution than '$1' because it represents itself. The $1 would fail if using text like 'getURL'
