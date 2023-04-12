// const checkAir = function (samples, threshold) {
//   let dirtySum = 0;
//   for(let i = 0; i < samples.length; i++) {
//     if(samples[i] === 'dirty') {
//       dirtySum ++;
//     }
//   }
//   if(threshold < dirtySum/samples.length) {
//     return 'Polluted';
//   } else {
//     return 'Clean';
//   }
// };


const checkAir = function (samples, threshold) {
  let dirtySum = 0;

  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === 'dirty') dirtySum++
  }
  return (threshold < dirtySum / samples.length) ? "Polluted" : "Clean"

};


console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))