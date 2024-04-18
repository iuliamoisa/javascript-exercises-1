const add = function(a, b) {
	 return a+b;
};

const subtract = function(a, b) {
  return a-b;
	
};

const sum = function(arr) {
  if(arr.length == 0) return 0;
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
	
};

const multiply = function(arr) {
  if(arr.length == 0) return 0;
  let res = 1
  for(let i = 0; i < arr.length; i++){
    res *= arr[i];
  }
  return res;

};

const power = function(a, b) {
  return a ** b;
	
};

const factorial = function(value) {
  if(value == 0) return 1;
  return value * factorial(value - 1);

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
