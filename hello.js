const _ = require('lodash'); 

// 2. Use a function from lodash (shuffles an array)
const numbers = [1, 2, 3, 4, 5];
const shuffled = _.shuffle(numbers); 

console.log("Original:", numbers);
console.log("Shuffled:", shuffled);