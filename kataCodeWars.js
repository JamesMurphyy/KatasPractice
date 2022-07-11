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
  return Math.ceil(year/100); //using ceiling method to round up to nearest century (100)
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

function abbrevName(name){
  let in1 = ''
  let in2 = ''
  
  in1 = name[0]
  for (let i = 0; i <= name.length; i++) {
    if (name[i] == " ") {
      in2 = name[i + 1]
    }
  }
  return `${in1.toUpperCase()}.${in2.toUpperCase()}`
}