/*
Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]


*/

function powersOfTwo(n) {
  let ans = [];
  for (let i = 0; i <= n; i++) {
    ans.push(Math.pow(2, i));
  }
  return ans;
}

function powersOfTwo(n) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(2 ** i);
  }
  return arr;
}
// OR WHILE LOOP

function powersOfTwo(n) {
  let ans = [];
  let i = 0;
  while (i <= n) {
    ans.push(Math.pow(2, i));
    i++;
  }

  return ans;
}

// OR OTHER WAY

function powersOfTwo(n) {
  return Array.from({ length: n + 1 }, (v, k) => 2 ** k);
}
