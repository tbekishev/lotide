const flatten = function(arrayA) {
  let newArray = [];
  for (let elem of arrayA) {
    if (Array.isArray(elem)) {
      for (let elemNested of elem) {
        newArray.push(elemNested);
      }
    } else {
      newArray.push(elem);
    }
  }
  return newArray;
};
module.exports = flatten;