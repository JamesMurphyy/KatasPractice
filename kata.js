const sumLargestNumbers = function (data) {
  data = data.sort(function (a, b) {
    return a - b;
  });
  return data[data.length - 1] + data[data.length - 2];
};

console.log(sumLargestNumbers([4, 12, 2]));
console.log(sumLargestNumbers([40, 2, 3]));
console.log(sumLargestNumbers([100, 20, 14, 6, 70, 4]));
