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
    var bin = num.toString(2);

    // Add leading 0's until string is length 8
    // (not sure if this is what they want though)
    while (bin.length < 8) {
      bin = '0' + bin;
    }

    return bin;
  },

  multiply: function(a, b) {
    // Precision of numbers is number of digits
    // after the decimal point
    var aStr = a.toString();
    var aPrecision = aStr.slice(aStr.indexOf('.') + 1).length;
    var bStr = b.toString();
    var bPrecision = bStr.slice(bStr.indexOf('.') + 1).length;

    var maxPrecision = Math.max(aPrecision, bPrecision);
    var preciseStr = (a * b).toPrecision(maxPrecision);
    return Number.parseFloat(preciseStr);
  }
};
