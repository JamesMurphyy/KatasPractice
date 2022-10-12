/*

You've just been hired at Lighthouse Markets, a reputable (and thoroughly fictional) grocery store chain. One of the primary features of Lighthouse Markets is their recycling program on pop bottles. Here is how the program works:

For every two empty bottles, you can get one free (full) bottle of pop
For every four bottle caps, you can get one free (full) bottle of pop
Each bottle of pop costs $2 to purchase

Instruction
Given the above parameters, write a program so that you can figure out how many total bottles of pop can be redeemed given a customer investment.

*/

// Task 1
// Figure out the algorithm that will calculate this. For example, given a $20 investment, the customer will get 10 bottles of pop. That gives a supply of both bottles and bottle caps that can be used to redeem for further bottles, which will then produce a further supply for recycling.

const bottles = function (investmentOfBottles) {
  if (isNaN(investmentOfBottles)) {
    return {
      totalBottles: 0,
      bottlesBought: 0,
      bottlesFromCaps: 0,
      bottlesFromEmpties: 0,
      emptyBottlesLeftover: 0,
      capsLeftover: 0,
    };
  }

  let bottlesPurchased = Math.floor(investmentOfBottles / 2);
  let bottlesFromCaps = Math.floor(bottlesPurchased / 4);
  let bottlesFromEmpties = Math.floor(bottlesPurchased / 2);

  let totalBottles = bottlesPurchased + bottlesFromCaps + bottlesFromEmpties;

  // return totalBottles;
  return {
    totalBottles: totalBottles,
    bottlesBought: bottlesPurchased,
    bottlesFromCaps: bottlesFromCaps,
    bottlesFromEmpties: bottlesFromEmpties,
    emptyBottlesLeftover: bottlesFromCaps % 2,
    capsLeftover: bottlesFromEmpties % 4,
  };
};

// console.log(bottles(10));
// console.log(bottles(20));
// console.log(bottles(30));
// console.log(bottles(40));

// for (let i = 0; i <= totalBottles; i++) {
//   numOfBottleCaps++;
//   numOfEmptyBottles++;
// }
// if (numOfBottleCaps % 4 === 0) {
//   totalBottles += Math.floor(numOfBottleCaps / 4);
// }
// if (numOfEmptyBottles % 2 === 0) {
//   totalBottles += Math.floor(numOfEmptyBottles / 2)
// }
// console.log(numOfBottleCaps, "bottle caps");
// console.log(numOfEmptyBottles, "empty bottles");

// Task 2
// Have your program accept an argument (argv) that will allow the user to specify the amount (in dollars) that the customer is going to spend. The node script will then calculate the total number of bottles that the customer will receive.

let result = bottles(process.argv.slice(2));
console.log(result);

// Task 3
// Enhance the output of your program so that once the amount has been given, it provides a breakdown of how many bottles were purchased, how many were obtained through bottle recycling, and how many were obtained through bottle cap recycling.


//Integrated into function



// Task 4
// Add to the output, so that the program will tell the customer how many bottles and bottle caps they will have left over. We have to upsell the customer on buying more pop after all!
