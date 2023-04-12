const instructorWithLongestName = function (instructors) {
  let longestName = "";
  let ans;
  for (let i = 0; i < instructors.length; i++) {
    let nameLength = instructors[i].name;
    if (longestName.length < nameLength.length) {
      longestName = nameLength;
      ans = instructors[i];
    }
  }
  return ans;
};


console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "asjdfafadfsdfs", course: "iOS" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "j", course: "Web" }
]));