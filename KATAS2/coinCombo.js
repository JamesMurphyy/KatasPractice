/*
The function takes cents value (int) and needs to return the minimum number of coins combination of the same value.

The function should return an array where
coins[0] = pennies ==> $00.01
coins[1] = nickels ==> $00.05
coins[2] = dimes ==> $00.10
coins[3] = quarters ==> $00.25

So for example:
coinCombo(6) --> [1, 1, 0, 0]
*/

const coinCombo = function (cents) {
  const coins = [0, 0, 0, 0];

  const quarters = parseInt(cents / 25);
  coins[3] = quarters;
  cents = cents % 25;

  const dimes = parseInt(cents / 10);
  coins[2] = dimes;
  cents = cents % 10;

  const nickles = parseInt(cents / 5);
  coins[1] = nickles;
  const cents = cents % 5;

  coins[0] = cents;

  return coins;
};
