const squareCode = message => {
  let string = message.replace(/\s+/g, "").split('');
  let length = Math.ceil(Math.sqrt(string.length));
  // console.log(length)
  // console.log(string)
  return string.reduce((acc, l, i) => (acc[i % length] += l, acc), new Array(length).fill('')).join(' ');
};

// , new Array(length).fill('')
console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));