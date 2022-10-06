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
  let ans = {};
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
  let followersList = makeFollowedByIdsObject(data);
  let highestNumber = -Infinity;
  let mostPopular = "";
  for (let profile in followersList) {
    if (followersList[profile].length > highestNumber) {
      highestNumber = followersList[profile].length;
      mostPopular = data[profile]["name"];
    }
  }
  return mostPopular;
};

// console.log(mostPopular(data));

//Implement printAll() which outputs a list of everyone and for each of them, the names of who they follow and who follows them.

const listOfFollowing = function (profile) {
  let listOfFollowingIds = data[profile]["follows"];
  let arrayOfFollowingNames = [];
  for (let profile of listOfFollowingIds) {
    arrayOfFollowingNames.push(data[profile]["name"]);
  }
  // console.log(arrayOfFollowingNames);
  let listOfFollowingNames = arrayOfFollowingNames.join(", ");
  return listOfFollowingNames;
};

const listOfFollowers = function (profile) {
  let followedByIdsObject = makeFollowedByIdsObject(data);
  let listOfFollowersId = followedByIdsObject[profile];
  let arrayOfFollowersNames = [];
  for (let profile of listOfFollowersId) {
    arrayOfFollowersNames.push(data[profile]["name"]);
  }
  let listOfFollowersNames = arrayOfFollowersNames.join(", ");
  return listOfFollowersNames;
};

const printAll = function (data) {
  for (const profile in data) {
    console.log("----");
    console.log(data[profile]["name"])
    console.log("Following : ", listOfFollowing(profile));
    console.log("Followed By : ", listOfFollowers(profile));
    console.log("----");
  }
};

// console.log(printAll(data))

//Implement unrequitedFollowers() which returns a list of names for those who follow someone that doesn't follow them back.

const unrequitedFollowers = function(data) {
  let unrequitedArray = [];
  for (let profile in data) {
    let followingArray = data[profile]["follows"]
    for (let element of followingArray) {
      if (!data[profile]["follows"].includes(profile) && !unrequitedArray.includes(data[profile]["name"])) {
        unrequitedArray.push(data[profile]["name"]);
      }
    }
  }
  let unrequitedList = unrequitedArray.join(", ")
  return unrequitedList;
};

// console.log(unrequitedFollowers(data))

/*

Implement some or all these remaining functions.

Identify who has the most followers over 30
Identify who follows the most people over 30
List everyone and their reach (sum of # of followers and # of followers of followers)

*/

// Most Followers Over Thirty

const followersOverCertainAge = function (data, age) {
  let followersOverCertainAgeObject = makeFollowedByIdsObject(data)
  // console.log(followersOverCertainAgeObject)
  for (let profile in followersOverCertainAgeObject) {
    let followersArray = followersOverCertainAgeObject[profile]
    // console.log(followersArray)
    for (let i = 0; i < followersArray.length; i++) {
      if (data[followersArray[i]]["age"] < age) {
        followersArray.splice(i, 1);
      }
    }
  }
return followersOverCertainAgeObject
};

// console.log(followersOverCertainAge(data, 30))

//