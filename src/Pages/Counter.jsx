import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div style={{backgroundColor:"pink", textAlign:"center",marginBottom:"10px", border:"5px ridge red"}}>
      <p style={{fontSize:"50px", borderBottom:"3px solid green"}}>Counter App</p>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}  style={{ marginLeft: "10px" }}>Increase</button>
      <button onClick={() => setCount(count - 1)}  style={{ marginLeft: "10px" }}>Decrease</button>
      <button onClick={() => setCount(0)}  style={{ marginLeft: "10px" }}>Reset</button>
      
    </div>
  );
}

export default Counter;
