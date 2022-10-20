const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let newObj = {};
  for (let symb of sentence) {
    if (symb !== ' ') {
      if (newObj[symb]) {
        newObj[symb]++;
      } else {
        newObj[symb] = 1;
      }
    }
  }
  return newObj;
};