const takeUntil = (array, callback) => {
  const newArray = [];
  for (let item of array) {
    if (callback(item)) return newArray;
    newArray.push(item);
  }
};
module.exports = takeUntil;