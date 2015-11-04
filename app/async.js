exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    return {
        then: function(callback) {
            callback(value);
        }
    };
  },

  manipulateRemoteData : function(url) {
    return {
        then: function(callback) {
            var httpRequest = new XMLHttpRequest();
            httpRequest.onreadystatechange = function() {
                if (httpRequest.readyState === XMLHttpRequest.DONE) {
                    var people = JSON.parse(httpRequest.response).people;
                    var names = [];
                    for (var i=0; i<people.length; i++) {
                        names.push(people[i].name);
                    }
                    names.sort();
                    callback(names);
                }
            };
            httpRequest.open('GET', url, true);
            httpRequest.send(null);
        }
    };
  }
};
