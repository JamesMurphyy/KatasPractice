//The Luhn Algorithm is used to validate various identitifcation numbers, such as credit card numbers and social insurance numbers.

//Write a function check, which, given a number, returns whether it is valid or not (according to the Luhn Algorithm).


// Not fully finished ****

const check = function (value) {
  // Accept only digits
  if (/[^0-9-\s]+/.test(value)) return false;

  let nCheck = 0;
  let bEven = false;

  // value = value.replace(/\D/g, "");

  for (let i = value.length - 1; i >= 0; i--) {
    let cDigit = value.charAt(i);
    let nDigit = parseInt(cDigit, 10);
    if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

    nCheck += nDigit;
    bEven = !bEven;
  }

  return nCheck % 10 == 0; // return if valid or not? -- according to Luhn Algorithm
};

console.log(check(12345674)) // True
console.log(check(7992739870)) // False
