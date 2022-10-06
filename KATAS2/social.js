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

// Implement a function biggestFollower() which returns the name of the individual who follows the most people.
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

//Implement mostPopular() which returns the name of the most popular (most followed) individual.
const makeEmptyIdObject = function (data) {
  const ans = {};
  for (let id in data) {
    ans[id] = [];
  }
  return ans;
};

// console.log(makeEmptyIdObject(data))

const makeFollowedByIdsObject = function (data) {
  let followedByIdsObject = makeEmptyIdObject(data);
  for (let profile in data) {
    let followingArray = data[profile]["follows"];
    // console.log(followingArray)
    for (let element of followingArray) {
      // console.log("tessstttt", element)
      // console.log(profile)
      followedByIdsObject[element].push(profile);
    }
  }
  return followedByIdsObject;
};

// console.log(makeFollowedByIdsObject(data));

const mostPopular = function (data) {
  const followersList = makeFollowedByIdsObject(data);
  let highestNumber = -Infinity;
  let mostPopular = "";
  for (let profile in followersList) {
    if (followersList[profile].length > highestNumber) {
      highestNumber = followersList[profile].length
      mostPopular = data[profile]["name"]
    }
  }
  return mostPopular;
};

// console.log(mostPopular(data));
