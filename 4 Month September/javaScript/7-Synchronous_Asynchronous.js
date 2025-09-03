// Synchronous
console.log(1);
console.log(2);
console.log(3);


// Asynchronous
console.log("Start");
setTimeout(() => {
  console.log("Second");
}, 2000);
console.log("Last");