import { useState } from "react";

export default function Counter() {
  const [counter, setCount] = useState(0);
  const [incrementBy, setIncrementBY] = useState(1);


  function increment() {
    setCount(counter + incrementBy);
  }
  function decrement() {
    setCount(counter - incrementBy);
  }


  function increseIncrement() {
    setIncrementBY(incrementBy+1);
  }
  function dicreseDecrement() {
    setIncrementBY(incrementBy-1);
  }




  return (
    <div>
      <h1>Count value is : {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <h3>We increment by : {incrementBy}</h3>
      <button onClick={increseIncrement}>increment</button>
      <button onClick={dicreseDecrement}>decrement</button>
    </div>
  );
}
