// Pig latin
// Take first letter
// Add "ay" to the end of the word

const pigLatin = function (text) {
  let words = text.split(" ").filter((e) => e.length > 0);
  // console.log(words);
  let answer = "";
  for (let word of words) {
    firstLetterStored = word[0];
    firstLetterGone = word.slice(1);
    addLastPart = firstLetterGone + `${firstLetterStored}ay `;
    answer += addLastPart;
  }
  console.log(answer);
  return answer;
};

const args = process.argv.slice(2);
// console.log(args);
let words = "";
for (let i = 0; i < args.length; i++) {
  words += `${args[i]} `;
  // console.log(words);
}
pigLatin(words);
