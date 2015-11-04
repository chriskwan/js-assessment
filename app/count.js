exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var num = start;

    // test expects logic to be executed immediately
  console.log(num);
  num++;

    var intervalId = setInterval(function() {
      if (num <= end) {
      console.log(num);
      num++;
      }
    }, 100);

    return {
      cancel: function() {
        clearInterval(intervalId);
      }
    };
  }
};
