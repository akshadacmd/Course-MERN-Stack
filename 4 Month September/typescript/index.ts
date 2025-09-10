function greet(name: string): string {
  return `Hello, ${name}`;
}

console.log(greet("Akshada"));



function addNumbers(a: number, b: number): number {
  return a + b;
}
const num1: number = 10;
const num2: number = 25;

console.log(`The sum is: ${addNumbers(num1, num2)}`);



//Q What is the difference between client-side and server-side
//Ans : # Client-side means faster user interaction but less secure
//  code runs in the browser like HTML, CSS, JavaScript, React. 
// It handles UI rendering, input validation, and user interactions. 
// Example: Form validation before submitting.

//# Server-Side means secure and powerful, but adds network latency
// code runs on the server like Node.js, Python, PHP, Java.
// It handles business logic, database operations, and authentication.
//  Example: Checking if an email already exists in the database.



//Q  What is the difference between React functional components and class components
//Functional Components:Are plain JavaScript functions that return JSX.
//Use Hooks (useState, useEffect) for state & lifecycle.
//Shorter, cleaner, and preferred in modern React


//Class Components : are older, verbose
// use lifecycle methods
//More verbose and used in older React codebases