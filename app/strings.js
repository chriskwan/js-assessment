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
  	var curLine = "";

  	for (var i=0; i<words.length; i++) {
  		// first word in the line
  		if (!curLine.length) {
  			curLine += words[i];
  		} else {
  			// What the current line length would be if the current word as added
  			// including the space in between the words
  			var lineLengthWithWord = curLine.length + words[i].length + 1;
  			if (lineLengthWithWord <= cols) {
  				curLine += " " + words[i];
  			} else { // current word needs to go on a new line
  				newStr += curLine + "\n";
  				curLine = "";
  				curLine += words[i];
  			}
  		}
  	}

  	// handle the last word
  	if (curLine) {
  		newStr += curLine;
  	}

  	return newStr;
  },
  reverseString: function(str) {

  }
};
