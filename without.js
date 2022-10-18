const without = function(source, itemsToRemove) {
  let newArray =[];
  let counter = false;
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        counter = true;       
      }
    }
    if (!counter) {
      newArray.push(source[i]);
    }
    counter = false;
  } 
  return newArray;
}