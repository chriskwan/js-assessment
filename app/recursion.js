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

  },

  fibonacci: function(n) {
    if (n <= 1) {
      return 1;
    } else if (n === 2) {
      return 1;
    } else {
      return this.fibonacci(n-1) + this.fibonacci(n-2);
    }
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
