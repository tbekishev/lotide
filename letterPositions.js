const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.split('');
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (!results[sentence[i]]) {
        results[sentence[i]] = [];
      }
      results[sentence[i]].push(i);
    }
  }
  
  return results;
};
module.exports = letterPositions;