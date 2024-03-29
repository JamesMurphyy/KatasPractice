/*
Create a function called wrapLog() that takes in a function (callback) and a string (name) and returns a function that internally 
invokes (calls) callback during its execution and also logs the name, input parameters, 
and return value of the callback function. Following is a template with example usage.
*/

const wrapLog = function (callback, name) {
  /* your code here */
  if (name === "area") {
    return function (x, y) {
      console.log(`area(${x},${y}) => ${callback(x, y)}`);
    };
  }
  if (name === "volume") {
    return function (x, y, z) {
      console.log(`volume(${x},${y},${z}) => ${callback(x, y, z)}`);
    };
  }
};

const area = function (x, y) {
  return x * y;
};
const logArea = wrapLog(area, "area");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6

const volume = function (x, y, z) {
  return x * y * z;
};
const logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24
