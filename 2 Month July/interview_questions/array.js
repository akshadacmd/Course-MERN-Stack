const numbers = [10, 20, 30, 40];
const result = numbers.filter(num => num > 20); 
console.log(result);


const x = 10;
const y = "10";

console.log(x == y);  // true
console.log(x === y); // false


const a = [1, 2, 3];
a.push(4);
console.log(a); // [1, 2, 3, 4]
a.pop();
console.log(a); // [1, 2, 3]