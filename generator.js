var assert = require('assert');
var restify = require('restify');

var client = restify.createJsonClient({
  url: 'http://localhost:8080',
  version: '~1.0'
});

var getExpression = function(expression) {
  client.get('/calculate/'+expression, function(err, req, res, obj) {
    assert.ifError(err);
    console.log('Sent expression: ', expression);
    console.log('Server returned: %j', obj);
  });
};

var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var generator1 = function() {
  setInterval(function() {
    var generated = getRandomInt(0, 100) + "+" + getRandomInt(0, 100) + "=";
    console.log('Producer 1 generated: ', generated);
    getExpression(generated);
  }, 1000);
};

generator1();

var generator2 = function() {
  setTimeout(function() {
    setInterval(function() {
      var generated = getRandomInt(0, 100) + "+" + getRandomInt(0, 100) + "=";
      console.log('Producer 2 generated: ', generated);
      getExpression(generated);
    }, 1000);
  }, 500);
};

generator2();
