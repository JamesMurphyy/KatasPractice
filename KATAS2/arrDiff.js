/*
Implement a function that computes the difference between two lists. The function should remove all occurrences of elements from the first list (a) that are present in the second list (b). The order of elements in the first list should be preserved in the result.

Examples
If a = [1, 2] and b = [1], the result should be [2].

If a = [1, 2, 2, 2, 3] and b = [2], the result should be [1, 3].
*/

function arrayDiff(a, b) {
  return a.filter((x) => !b.includes(x));
}

function arrayDiff(a, b) {
  // PREP
  // (P)arameters - takes in 2 arrays
  // (R)eturn - returns an array a without
  // anything in array b
  // (E)xamples -
  //  ([1, 2], [1]) => [2]
  // ([1, 2, 2], [2]) => [1]
  // (P)seudocode -
  // Create new array
  let newArr = [];
  // Loop through array a
  for (let i = 0; i < a.length; i++) {
    // Only push elements from a that
    // aren't in b
    if (!b.includes(a[i])) {
      newArr.push(a[i]);
    }
  }
  return newArr;
}
