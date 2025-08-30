import React, { useMemo, useState } from "react";

const ExampleUseMemo = () => {
  const [number, setNumber] = useState(5);

  const [count, setCount] = useState(0);
  const handleClick = () => {
    try {
      setNumber(number + 5);
    } catch (error) {
      console.log(error);
    }
  };

  const squareNumber = useMemo(() => {
    return number * number;
  }, [number]);

  return (
    <div>
      <h1>Use Memo</h1>
      <p>Number : {number}</p>
      <p>Sqared (Memorized ) : {squareNumber}</p>

      <button className="btn btn-primary" onClick={handleClick}>
        Click
      </button>

      <br />
      <br />
      <br />
      <p>count : {count}</p>
      <button onClick={() => setCount(count + 1)}> Click</button>
    </div>
  );
};

export default ExampleUseMemo;