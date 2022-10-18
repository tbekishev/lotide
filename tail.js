const tail = function(array) {
  let newArray = [];
  for (let i = 0; i <= array.length - 2; i++) {
    newArray[i] = array[i + 1];
  }
  return newArray;
};