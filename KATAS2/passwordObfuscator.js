const obfuscate = function(string) {
  let ans = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "a") {
      ans += 4;
    } else if (string[i] === "e") {
      ans += 3;
    } else if (string[i] === "o") {
      ans += 0;
    } else if (string[i] === "l") {
      ans += 1;
    } else {
      ans += string[i];
    }
  }
  return ans;
};

process.argv.slice(2).forEach(function(string) {
  console.log(obfuscate(string));
});