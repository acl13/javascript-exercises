const add = function(a, b) {
return a + b;
}


const subtract = function(a, b) {
  return (a - b);
};

const sum = function(arr) {
	return arr.reduce((acc, current) => acc + current, 0);
};

const multiply = function(array) {
  return array.reduce((acc, current) => acc * current, 1);

};

const power = function(a, b) {
  return a ** b;
	
};

const factorial = function(num) {
  let answer = 1;
  if (num == 0 || num == 1) {
    return answer;
  } else {
    for (let i = num; i >= 1; i--){
      answer = answer * i;
    }
    return answer;
  }

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
