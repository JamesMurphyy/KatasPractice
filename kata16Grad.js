const makeCase = function(input, case1) {
  // Put your solution here
  if (case1 === "camel") {
    return input.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index){
      console.log(input, word, index)
      return index == 0 ? word.toLowerCase() : word.toUpperCase()
    }).replace(/\s+/g, "");
  }
  if (case1 === "pascal") {
    return input.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index){
      return index == 0 ? word.toUpperCase() : word.toUpperCase()
    }).replace(/\s+/g, "");
  }
  if (case1 === "kebab") {
    return input.replace(/\s+/g, "-")
  }
  if (case1 === "snake") {
    return input.replace(/\s+/g, "_")
  }
  if (case1 === "title") {
    return input.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index){
      return index == 0 ? word.toUpperCase() : word.toUpperCase()
    });
  }
  if (case1 === "vowel") {
    return input.replace(/[aeiouAEIOU]/g, (word) => word.toUpperCase())
  }
  if (case1 === "consonant") {
    return input.replace(/[^aeiouAEIOU]/g, (word) => word.toUpperCase())
  }
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));