const max = (arr) => arr.reduce((acc, curr) => (curr > acc ? curr : acc));
console.log(max(numbers));

const sum = (arr) =>
arr.filter((num) => num % 2 === 0).reduce((acc, curr) => acc + curr);

const avg = (arr) => 
arr.reduce((acc,curr) => acc+curr)/arr.length;