function reverse(text) {
  let reversedWords = "";
  for (let x = text.length - 1; x >= 0; x--) {
    reversedWords += text[x];
    // console.log(reversedWords);
  }
  return reversedWords;
}

const args = process.argv.slice(2);
for (let y = 0; y < args.length; y++) {
  console.log(reverse(args[y]));
}


//// Other ways to write the funtions

// const reverse = function(text) {
  // let reversedWords = "";
  // for (let x = text.length - 1; x >= 0; x--) {
  //   reversedWords += text[x];
  //   // console.log(reversedWords);
  // }
  // return reversedWords;
// }

// const reverse = (text) => {
  // let reversedWords = "";
  // for (let x = text.length - 1; x >= 0; x--) {
  //   reversedWords += text[x];
  //   // console.log(reversedWords);
  // }
  // return reversedWords;
// }
