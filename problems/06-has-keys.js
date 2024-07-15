/*
Write a function called hasKeys that takes in an object and an array of
strings. It should return true if all of the strings in the array are keys in
the object.
*/

// Your code here
let hasKeys = function (obj, strings) {
  for (let i = 0; i < strings.length; i++) {
    if (Object.keys(obj).includes(strings[i]) === false)
      return false;
  }
  return true;
}

// let survey = {
//   name: 'Check',
//   question: 'Satisfied?',
//   choices: ['Yes', 'No']
// }
// console.log(hasKeys(survey, ['question', 'choices'])); // true
// console.log(hasKeys(survey, ['numSubmitted', 'choices'])); // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = hasKeys;
} catch { }
