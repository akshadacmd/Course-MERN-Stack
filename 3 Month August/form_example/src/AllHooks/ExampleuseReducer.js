import React, { useReducer } from "react";

const ExampleUseReducer = () => {

    const reducer = (currentValue, payload) => {
        console.log(currentValue , "current value ==>")
        console.log(payload , "payload ==>")

        if (payload.type === "add") {
            return currentValue + 5;
        }else if (payload.type === "subtract") {
      return currentValue - 5;
    }

        return currentValue;
    };

    const [count, dispatch] = useReducer(reducer, 0);

    const handleAdd = () => {
        try {
            dispatch({ type: "add" }); 
        } catch (error) {
            console.log(error);
        }
    };
      const handleSubtract = () => {
        try {
            dispatch({ type: "subtract" });
        } catch (error) {
            console.log(error);
        }
   
  };

    return (
        <div>
            <h1>Use Reducer Hook</h1>
            <h2>Count : {count}</h2>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleSubtract}>Subtract</button>
        </div>
    );
};

export default ExampleUseReducer;