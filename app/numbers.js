exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
  	var bin = num.toString(2);
  	var index = bin.length - bit;
  	return Number.parseInt(bin[index], 10);
  },

  base10: function(str) {
  	var bin = Number.parseInt(str, 2);
  	return Number.parseInt(bin, 10);
  },

  convertToBinary: function(num) {
  },

  multiply: function(a, b) {

  }
};
