exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var fileList = [];
    for (var i=0; i<data.files.length; i++) {
        var file = data.files[i];
        if (typeof file === "string") {
            // Only add a file if we are in the correct directory
            // or if the directory doesn't matter
            // (e.g. it wasn't specified or we are in a sub-directory of it)
            var isCorrectDir = (dirName === undefined || dirName && data.dir === dirName);
            if (isCorrectDir) {
                fileList.push(file);
            }
        } else {
            var subDirFiles;
            // We have already fold the directory in question
            // and are now searching in sub-directories of it
            // so no need to pass the name through again
            if (data.dir === dirName) {
                subDirFiles = this.listFiles(file);
            } else { // We haven't found the directory in question yet, keep searching
                subDirFiles = this.listFiles(file, dirName);
            }
            fileList = fileList.concat(subDirFiles);
        }
    }
    return fileList;
  },

  permute: function(arr) {
    if (arr.length <= 0) {
      return [ [] ];
    }

    if (arr.length === 1) {
      return [ arr ];
    }

    //cwkTODO maybe don't need this
    if (arr.length === 2) {
      return [
        [ arr[0], arr[1] ],
        [ arr[1], arr[0] ]
      ];
    }

    var permutes = [];

    // Generate all the permutations
    // by taking off the first item and
    // placing it at every position
    // of the rest of the array
    // (for all permutations of the rest of the array)
    var firstItem = arr[0];
    var restOfArr = arr.slice(1);
    var permutesOfRest = this.permute(restOfArr); // array of arrays
    var curPermute;

    for (var i=0; i<permutesOfRest.length; i++) {
      curPermutesOfRest = permutesOfRest[i]; // an array

      // Place firstItem at every position
      // (including +1 for adding to the end)
      for (var j=0; j<curPermutesOfRest.length+1; j++) {
        // make a copy first because we will modify it with splice
        var curPermute = curPermutesOfRest.slice();
        curPermute.splice(j, 0, firstItem);
        permutes.push(curPermute);
      }
    }
    return permutes;
  },

  fibonacci: function(n) {
    if (n <= 0) {
      return 0;
    }
    if (n === 1 || n === 2) {
      return 1;
    }
    return this.fibonacci(n-1) + this.fibonacci(n-2);
  },

  validParentheses: function(n) {
    if (n < 1) {
      return [];
    } else if (n === 1) {
      return ['()'];
    } else {
      // use a map instead of an array to prevent duplicates
      // e.g.: "()"+"()()" === "()()"+"()"
      var comboMap = {};
      var innerCombos = this.validParentheses(n-1);

      // For each inner combo, add one more pair of parentheses to it
      // in each of the 3 valid configurations
      for (var i=0; i<innerCombos.length; i++) {
        var curInnerCombo = innerCombos[i];

        comboMap["(" + curInnerCombo + ")"] = true;
        comboMap["()" + curInnerCombo] = true;
        comboMap[curInnerCombo + "()"] = true;
      }

      var comboList = [];
      for (var combo in comboMap) {
        if (comboMap.hasOwnProperty(combo)) {
          comboList.push(combo);
        }
      }
      return comboList;
    }
  }
};
