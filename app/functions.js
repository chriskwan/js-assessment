exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak : function(fn, obj) {
    return fn.apply(obj)
  },

  functionFunction : function(str) {
    return function(str2) {
      return str + ", " + str2;
    };
  },

  makeClosures : function(arr, fn) {
    var closures = [];

    for (var i=0; i<arr.length; i++) {
      var createFunctionForNum = function(num) {
        return function() {
          return fn(arr[num])
        };
      };
      closures.push(createFunctionForNum(i));

      // Using an IIFE:
      // closures.push(
      //   (function(num) {
      //     return function() {
      //       return fn(arr[num]);
      //     };
      //   })(i)
      // );
    }

    return closures;
  },

  partial : function(fn, str1, str2) {
    return function(str3) {
      return fn.call(this, str1, str2, str3);
    };
  },

  useArguments : function() {
    var sum = 0;

    for (var i=0; i<arguments.length; i++) {
      sum += arguments[i];
    }

    return sum;
  },

  callIt : function(fn) {
    // Slice off first argument since it is fn
    // arguments is not a real array and doesn't have slice, so use Array's
    var args = Array.prototype.slice.call(arguments, 1);
    return fn.apply(this, args);
  },

  partialUsingArguments : function(fn) {
    var functionCreatorArgs = Array.prototype.slice.call(arguments, 1); // don't include fn

    return function() {
      // Combine the arguments passed to the function creator with
      // the arguments passed to created function
      // so that we have a full list of arguments to pass to `fn`
      // (Note that the `arguments` here are different than the outer `arguments`)
      var allArgs = Array.prototype.concat.apply(functionCreatorArgs, arguments);
      return fn.apply(this, allArgs);
    }
  },

  curryIt : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return fn.bind(this, args);
  }
};
