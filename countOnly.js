const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  let newObj = {};
  for (let toBeCounted in itemsToCount) {
    let count = itemsToCount[toBeCounted];
    if (count) {
      newObj[toBeCounted] = 0;
      for (let item of allItems) {
        if (toBeCounted === item) {
          newObj[toBeCounted]++;
        }
      }
      if (newObj[toBeCounted] === 0) {
        newObj[toBeCounted] = undefined;
      }
    } else {
      newObj[toBeCounted] = undefined;
    }
  }
  return newObj;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
;
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);