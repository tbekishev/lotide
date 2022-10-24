const findKeyByValue = function(obj, val) {
  let result;
  for (let key in obj) {
    if (obj[key] === val) {
      result = key;
    }
  }
  return result;
};
module.exports = findKeyByValue;