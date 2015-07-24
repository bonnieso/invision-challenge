'use strict';

var restify = require('restify');
var Evaluator = require('./evaluator.js');

var evaluator = new Evaluator();

var server = restify.createServer({
    name: 'evaluator',
    version: '1.0.0'
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/calculate/:expression', function (req, res, next) {
  console.log('Expression received: ', req.params.expression);
  var result = evaluator.calculate(req.params.expression);
  console.log('Calculated answer: ', result);
  res.send({result: result});
  return next();
});

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});
