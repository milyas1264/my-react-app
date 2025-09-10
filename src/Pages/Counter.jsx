import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div style={{marginLeft:"40%",backgroundColor:"blue", textAlign:"center",marginBottom:"10px"}}>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      
    </div>
  );
}

export default Counter;
