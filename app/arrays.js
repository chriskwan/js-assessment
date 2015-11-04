exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for (var i=0; i<arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }

    return -1;
  },

  sum : function(arr) {
    var sum = 0;

    for (var i=0; i<arr.length; i++) {
      sum += arr[i];
    }

    return sum;
  },

  remove : function(arr, item) {
    var keep = [];

    for (var i=0; i<arr.length; i++) {
      if (arr[i] !== item) {
        keep.push(arr[i]);
      }
    }

    return keep;
  },

  removeWithoutCopy : function(arr, item) {
    // go through array backwards
    // so we don't have to worry about
    // indices shifting as we remove in-place
    var i = arr.length;

    while (i >= 0) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      }
      i--;
    }

    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    // Using slice and concat:
    //return arr.slice(0, index).concat( item, arr.slice(index) );
    
    // Using splice
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0;

    for (var i=0; i<arr.length; i++) {
      if (arr[i] === item) {
        count++;
      }
    }

    return count;
  },

  duplicates : function(arr) {
    var counts = {};

    for (var i=0; i<arr.length; i++) {
      var item = arr[i];
      if (counts.hasOwnProperty(item)) {
        counts[item]++;
      } else {
        counts[item] = 1;
      }
    }

    var dupes = [];

    for (var item in counts) {
      if ( counts.hasOwnProperty(item) ) {
        if (counts[item] > 1) {
          dupes.push( Number.parseInt(item) );
        }
      }
    }

    return dupes;
  },

  square : function(arr) {
    var squares = [];

    for (var i=0; i<arr.length; i++) {
      squares.push(arr[i] * arr[i]);
    }

    return squares;
  },

  findAllOccurrences : function(arr, target) {
    var indices = [];

    for (var i=0; i<arr.length; i++) {
      if (arr[i] === target) {
        indices.push(i);
      }
    }
    
    return indices;
  }
};
