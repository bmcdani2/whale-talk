'use strict';

var input = 'Turpentine and turtles.';
var vowels = ['a', 'e', 'i', 'o', 'u'];
var resultArray = [];

for (var inputIndex = 0; inputIndex < input.length; inputIndex++) {
  for (var vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++) {
    if (input[inputIndex] === vowels[vowelsIndex]) {
      resultArray.push(input[inputIndex]);
    }
  }
  if (input[inputIndex] === 'e') {
    resultArray.push(input[inputIndex]);
  } else if (input[inputIndex] === 'u') {
    resultArray.push(input[inputIndex]);
  }
}
console.log(resultArray.join('').toUpperCase());