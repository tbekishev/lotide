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
module.exports = countOnly;