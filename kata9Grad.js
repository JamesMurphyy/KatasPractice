const camelCase = function(input) {
  let ans = ""
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      ans += input[i + 1].toUpperCase()
      i++
    } else {
      ans += input[i]
    }
  }
  return ans
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));