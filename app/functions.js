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
    // Do the following but not hard-coded.
    // (i.e.: you shouldn't have to know how many parameters `fn` takes)
    // return function(a) {
    //   return function(b) {
    //     return function(c) {
    //       return fn(a, b, c);
    //     };
    //   };
    // };

    // Written as function expressions:
    // var fa = function(a) {
    //   var fb = function(b) {
    //     var fc = function(c) {
    //       return fn(a, b, c);
    //     };
    //     return fc;
    //   };
    //   return fb;
    // }
    // return fa;

    // Written without caring about the parameter name:
    var fa = function(dontCare) {
      var aArg = Array.prototype.slice.call(arguments);
      var fb = function(dontCare) {
        var bArg =  Array.prototype.slice.call(arguments);
        var fc = function(dontCare) {
          var cArg =  Array.prototype.slice.call(arguments);
          var allArgs = aArg.concat(bArg, cArg);
          return fn.apply(this, allArgs);
        };
        return fc;
      };
      return fb;
    }
    return fa;    
  }
};
