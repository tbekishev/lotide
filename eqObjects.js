const eqObjects = function(object1, object2) {
  let result = 0;
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key in object1) {
      if (typeof object1[key] === 'object' && typeof object2[key] === 'object')
        return eqObjects(object1[key], object2[key]);
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

const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
    }
    for (let i = 0; i < array1.length; i++) {
      if (Array.isArray(array1[i]) && Array.isArray(array1[i])) {
        if (!eqArrays(array1[i], array2[i])){
          return false;
          }
          continue;
          }
        if (array1[i] !== array2[i]) {
        return false
      }
    }    
    return true;
};