const numberOfVowels = function(data) {
  vowels = ['a', 'e', 'i', 'o', 'u']
  ans = []
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j<vowels.length; j++)
      if (data[i] === vowels[j]) {
        ans.push(data[i])
      }
  
  }  
  return ans.length 
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));