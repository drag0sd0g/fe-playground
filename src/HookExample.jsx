import React, { useState, useEffect } from "react";

function HookExample() {
  //useState returns a pair: the current state value and a function that lets you update it.
  const [count, setCount] = useState(0);
  //can use useState hook multiple times for any field
  //   const [age, setAge] = useState(42);
  //   const [fruit, setFruit] = useState('banana');
  //   const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API (when we click the button below)
    document.title = `you clicked ${count} times`;
  });

  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
}

export default HookExample;
