import { useState, useEffect } from "react";

function Message() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component render hua ya count change hua!");
  }, [count]);

  return (
    <div class="m-4 p-4 border-2 border-green-400 flex-2 gap-10 ">
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)} class='text-amber-300'>Increase</button>
      <button onClick={() => setCount(count - 1)} class='text-amber-300' >Decrease</button>
      <button onClick={() => setCount(0)} class='text-amber-300' >Clear</button>
     
    </div>
  );
}

export default Message;
