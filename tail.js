// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);

const tail = function(array) {
  let newArray = [];
  for (let i = 0; i <= array.length - 2; i++) {
    newArray[i] = array[i + 1];
  }
  return newArray;
};
// console.log(tail([]))
// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); //ensure we get back two elements
assertEqual(result[0], "Lighthouse"); //ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); //ensure second element is "Labs"

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse","Labs"];
tail(words);
assertEqual(words.length, 3);