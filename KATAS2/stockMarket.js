/*
Create a function maxProfit, which, given a list of stock prices for a given day, returns the maximum profit that could have been made by buying a stock at the given price and then selling the stock later on.

*/

let num = [45, 24, 35, 31, 40, 38, 11];

const maxProfit = function (num) {
  
  let value = num[0];
  let profit = -1;

  for (let i = 1; i < num.length; i++) {
    if (num[i] > value) {
      profit = Math.max(profit, num[i] - value);
    } else {
      value = num[i];
    }
  }
  return profit;
};

console.log(maxProfit(num));
