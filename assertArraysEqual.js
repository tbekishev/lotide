const eqArrays = function (array1, array2) {
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
}

const assertArraysEqual = function(arrayA, arrayB) {
  if (eqArrays(arrayA, arrayB)) {
    console.log(`✅✅✅Assertion Passed: [${arrayA}] === [${arrayB}]`);
  } else {
    console.log(`❌❌❌Assertion Failed: [${arrayA}] !== [${arrayB}]`);
  }
};