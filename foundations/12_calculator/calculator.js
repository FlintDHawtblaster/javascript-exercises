const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(anArray) {
	return anArray.reduce((total, item) => total += item, 0);
};

const multiply = function(anArray) {
  return anArray.reduce((total, item) => total *= item, 1)
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  let totalFact = 1
	for (let i = a; i > 0; i--) {
    totalFact *= i;
  }

  return totalFact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
