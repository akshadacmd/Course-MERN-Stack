const myFunction = () => {
  try {
   console.log("var x ", x); // undefined(hoisted)
    var x = 10;
    var x = 20; //redeclare allowed
    console.log("var x", x);
    x = 50;     //reassign allowed
    console.log("var x", x);

    if (true) {
      var x = 100; //function-scope
    }
    console.log("var x ", x);








    //console.log("let y", y); //ReferenceError: Cannot access 'y' before initialization output

    let y = 10;
    // let y = 20; //redeclare not allowed
    y = 50;       //reassign allowed
    console.log("let y", y);

    if (true) {
      let y = 100; // block-scoped (new variable only inside block)
      console.log("let y inside block", y);
    }
    console.log("let y after block", y);

    





    const z = 10;
    //const z = 20; //redeclare not allowed
    // z = 50;       //reassign not allowed
    console.log("const z", z);

    if (true) {
      const z = 100; //block-scoped new variable only inside block
      console.log("const z inside block", z);
    }
    console.log("const z after block", z);

  } catch (error) {
    console.log(error);
  }
};

myFunction();
