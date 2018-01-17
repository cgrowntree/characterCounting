var countLetters = function thisCountsHowManyTimesEachLetterAppearsInSentence (input) {
  var result = {};
  for (var i = 0; i < input.length; i++) {
    var letter = input[i];
    if (letter !== " ")  {
      if (!result[letter]) {
        result[letter] = 0;
      }
      result[letter] = result[letter] + 1;
    }
  }
  return result;
};

console.log(countLetters("lighthouse in the house"));

// remove spaces by splitting input then join together in an array
// loop through object array length
// create object for each letter in array
// if array exists --> increase count
// log loop