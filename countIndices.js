var countLetters = function thisCountsHowManyTimesEachLetterAppearsInSentence (input) {
  var result = {};
  for (var i = 0; i < input.length; i++) {
    var letter = input[i];
    if (letter !== " ")  {
      if (!result[letter]) {
        result[letter] = [];
      }
      result[letter].push(i);
    }
  }
  return result;
};

console.log(countLetters("lighthouse in the house"));
