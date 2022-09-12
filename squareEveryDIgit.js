// 7kyu - Square Every Digit
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer

// Steps
// 1: convert number to an iterable
// 2: iterate over each index and perform squaring function
// 3: append the resulting value to a variable
// 4: return the variable converted back to a Number

// Solution One -Standard for loop
function squareDigits(num) {
  let x = String(num).split("");
  let y = [];
  for (let i = 0; i < x.length; i++) {
    let squared = Number(x[i]) ** 2;
    y.push(squared);
  }
  return Number(y.join(""));
}
console.log(squareDigits(9119));
console.log(typeof squareDigits(9119));

// Solution Two - Using a for of loop
function squareDigitsTwo(num) {
  let arr = String(num).split("");
  let x = [];
  for (digit of arr) {
    x.push(Number(digit) ** 2);
  }
  return Number(x.join(""));
}
console.log(squareDigitsTwo(9119));
console.log(typeof squareDigitsTwo(9119));

// Solution Three - One liner using spread and map()
const squareDigitsThree = (num) =>
  Number(
    [
      ...String(num)
        .split("")
        .map((i) => i ** 2),
    ].join("")
  );
console.log(squareDigitsThree(9119));
console.log(typeof squareDigitsThree(9119));

// Solution Four - One liner using type coercion and map()
const squareDigitsFour = (num) =>
  Number(
    ("" + num)
      .split("")
      .map((i) => i * i)
      .join("")
  );
console.log(squareDigitsFour(9119));
console.log(typeof squareDigitsFour(9119));
