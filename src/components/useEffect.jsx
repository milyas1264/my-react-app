import { useState, useEffect } from "react";

function Message() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component render hua ya count change hua!");
  }, [count]);

  return (
    <div class="m-4 p-4 border-2 border-blue-400">
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)} class='text-amber-300'>Increase</button>
    </div>
  );
}

export default Message;
