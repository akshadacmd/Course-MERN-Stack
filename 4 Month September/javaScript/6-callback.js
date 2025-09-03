//1.Callback function 
// Callback function passed as an argument to another function, executed later.
function myFunction(newFunction) {
  newFunction(); // calling the callback function
  console.log("hello");
}

function secondFunction() {
  console.log("callback function get called");
}

myFunction(secondFunction);


// 2. async/await


const getData = async () => {
  try {
    const userData = await User.find();  // Example DB call
    console.log(userData);
  } catch (error) {
    console.log(error);
  }
};

getData();