
const conditionalSum = function(values, condition) {
  let options = ['even', 'odd'];
  sum = 0;
  values.forEach(function(i) {
    if (options[i % 2] == condition) {
      sum = sum + i;
    }
  });
  return sum;
}


console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
