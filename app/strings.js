exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
  	var newStr = "";
  	var prevLetter;
  	var curLetter;
  	var curCount = 0;
  	for (var i=0; i<str.length; i++) {
  		var curLetter = str[i];
  		// Looking at a currently repeated letter
  		// or the first letter
  		if (curLetter === prevLetter || !prevLetter) {
  			if (curCount < amount) {
  				newStr += curLetter;
  			}
			curCount++;
  		} else { // Looking at a new letter
  			newStr += curLetter;
  			curCount = 1;
  		}

		prevLetter = curLetter;
  	}
  	return newStr;
  },
  wordWrap: function(str, cols) {
  	var newStr = "";
  	var words = str.split(" ");
  	var curLine = [];

  	for (var i=0; i<words.length; i++) {
  		// first word in the line
  		if (!curLine.length) {
  			curLine.push(words[i]);
  		} else {
  			// What the current line length would be if the current word as added
  			// including the space in between the words
  			var curLineLetterCount = curLine.join("").length;
  			var lineLengthWithWord = curLineLetterCount + words[i].length + 1;
  			if (lineLengthWithWord <= cols) {
  				curLine.push(" ");
  				curLine.push(words[i]);
  			} else { // current word needs to go on a new line
  				curLine.push("\n");
  				newStr += curLine.join("");
  				
  				curLine = [];
  				curLine.push(words[i]);
  			}
  		}
  	}

  	// handle the last word
  	if (curLine.length) {
  		newStr += curLine.join("");
  	}

  	return newStr;
  },
  reverseString: function(str) {
  	var revStrLetters = [];
  	for (var i=0; i<str.length; i++) {
  		revStrLetters.unshift(str[i]);
  	}
  	return revStrLetters.join("");
  }
};
