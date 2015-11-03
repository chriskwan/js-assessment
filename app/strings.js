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

  },
  reverseString: function(str) {

  }
};
