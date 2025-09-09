//1.Immediately Invoked Function Expression
//A function that runs as soon as it is defined
(function () {
  console.log("This runs immediately");
})();  

(function (name) {
  console.log(`Hello, ${name}`);
})("Akshada");



//2.Destructuring

//Object Destructuring

const person = { name: "John", age: 25, city: "Pune" };

// Extract properties
const { name: personName, age } = person;

console.log(personName); // John
console.log(age);  // 25


//Array Destructuring

const numbers = [10, 20, 30];

// Extract elements
const [first, second,rest] = numbers;

console.log(first);  // 10
console.log(second); // 20
console.log(rest);   // 30