exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    var regex = /[0-9]/;
    //return str.match(regex) ? true : false;
    return !!str.match(regex); // same as above
  },

  containsRepeatingLetter : function(str) {
    var regex = /([a-zA-Z])\1/; // use backreference to see if any letter is repeated once
    return !!str.match(regex);
  },

  endsWithVowel : function(str) {
    var regex = /[aeiouAEIOU]$/;
    //return str.match(regex) ? true : false;
    return !!str.match(regex); // same as above
  },

  captureThreeNumbers : function(str) {
    var regex = /[0-9]{3}/;
    var matches = str.match(regex);
    return matches ? matches[0] : false;
  },

  matchesPattern : function(str) {
    var regex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    return !!str.match(regex);
  },
  isUSD : function(str) {
    var regex = /^\$[0-9]{1,3}(,[0-9]{3})*(\.[0-9]{2})*$/;
    return !!str.match(regex);
  }
};
