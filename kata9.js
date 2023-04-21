const camelCase = function (input) {
  let ans = ""
  for (let i = 0; i < input.length; i++) {

    if (input[i] !== " ") {
      ans += input[i]
    } else if (input[i] === " ") {
      ans += input[i + 1].toUpperCase()
      i++
    }
  };
  return ans
}
console.log(camelCase("gggggggggggggg"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));