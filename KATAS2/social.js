const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"],
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"],
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"],
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"],
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"],
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"],
  },
};

/*


ans = {
  name:
  followers:
  following:
  age:
  code:
}

*/

// returns the name of individual who follows the most people
const biggestFollower = function (data) {
  let followerCount = -Infinity;
  let biggestFollower = "";
  for (let i in data) {
    if (data[i]["follows"].length > followerCount) {
      followerCount = data[i]["follows"].length;
      biggestFollower = data[i]["name"];
    }
  }
  return biggestFollower;
};
// console.log(biggestFollower(data));
