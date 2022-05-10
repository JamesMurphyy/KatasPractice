const repeatNumbers = function (data) {
  // Put your solution here
  result = []
  for (i in data) {
    // console.log(data[i]);
    let x = "";
    for (let y = 0; y < data[i][1]; y++) {
      // console.log(y);
      x += data[i][0];
    }
    result.push(x);
  }
  return result.join(', ');
};

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);
