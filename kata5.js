
const urlEncode = function(text) {
  let trimmedText = text.trim();  
  let ans = "";
  let space = "%20";
 
for (let i = 0; i < trimmedText.length; i++){
  if (trimmedText[i] === " "){
    ans = ans + space;
  } else {
    ans = ans + trimmedText[i];
  }
}
  return ans;
};


console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode("            Lighthouse Labs "));
console.log(urlEncode("blue is greenergefdsadf than purple for sure"));