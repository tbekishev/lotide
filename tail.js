const tail = function(array) {
  let newArray = [];
  if (array.length === 1 || array.length === 0) {
    return newArray;
  }
  for (let i = 0; i <= array.length - 2; i++) {
    newArray[i] = array[i + 1];
  }
  return newArray;
};
module.exports = tail;