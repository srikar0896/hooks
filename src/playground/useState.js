import React, { useState } from "react";

export default function() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}
