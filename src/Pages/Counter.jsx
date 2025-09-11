import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div style={{marginLeft:"40%",backgroundColor:"pink", textAlign:"center",marginBottom:"10px", border:"5px ridge red"}}>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}  style={{ marginLeft: "10px" }}>Increase</button>
      <button onClick={() => setCount(count - 1)}  style={{ marginLeft: "10px" }}>Decrease</button>
      <button onClick={() => setCount(0)}  style={{ marginLeft: "10px" }}>Reset</button>
      
    </div>
  );
}

export default Counter;
