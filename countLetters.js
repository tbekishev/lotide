const countLetters = function(sentence) {
  let newObj = {};
  for (let symb of sentence) {
    if (symb !== ' ') {
      if (newObj[symb]) {
        newObj[symb]++;
      } else {
        newObj[symb] = 1;
      }
    }
  }
  return newObj;
};
module.exports = countLetters;