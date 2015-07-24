'use strict';

var Evaluator = function() {
  this.calculate = function(expression){
    var expressionArray = expression.split("+");
    return parseInt(expressionArray[0])+parseInt(expressionArray[1]);
  };
};

module.exports = Evaluator;
