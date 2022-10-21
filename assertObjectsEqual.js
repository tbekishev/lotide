const eqObjects = function(object1, object2) {
  let result = 0;
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key in object1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (eqArrays(object1[key], object2[key])) {
          result++;
        }
      } else
      if (object1[key] === object2[key]) {
        result++;
      }
    }
    if (Object.keys(object1).length === result) {
      return true;
    }
  }
  return false;
};

const eqArrays = function(array1, array2) {
  let counter = true;
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        counter = false;
        break;
      }
    }
  } else {
    counter = false;
  } return counter;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  } else {
    console.log(`❌❌❌Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
  }
};