const numbers = [1, -5, 666, 2, 400, 11];
numbers.sort(function(a, b){return a - b});
console.log(numbers);

numbers.sort(function(a, b){return a > b});
console.log(numbers);
