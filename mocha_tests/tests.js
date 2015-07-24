var assert = require("assert");
var restify = require('restify');

var client = restify.createJsonClient({
  url: 'http://localhost:8080',
  version: '~1.0'
});

describe("Evaluator", function() {
  describe('the evaluator functions', function() {
    it("returns a 200 status for a valid expression", function() {
      client.get('/calculate/2+2=', function(err, req, res, obj) {
        assert.equal(200, res.statusCode);
      });
    });
    it("returns 4 when expression is 2+2=", function() {
      client.get('/calculate/2+2=', function(err, req, res, data) {
        assert.equal(4, data);
      });
    });
  });
});
