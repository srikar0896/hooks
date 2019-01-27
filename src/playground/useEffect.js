import React, { useState, useEffect, useDebugValue } from "react";
import uuid from 'uuid/v1';

const ChildCounter = ({ forkedCounter: { id, initialCount }, counterIndex }) => {
  const [childCounterCount, setChildCounterCount] = useState(null);
  const [forkedCounters, setForkedCounters] = useState([]);

  useEffect(() => {
    setChildCounterCount(initialCount);
  }, []);

  return (
    <>
      <p>Counter - {counterIndex} Parent's count {initialCount}</p>
      <button onClick={() => setChildCounterCount(childCounterCount - 1)}>-</button>
        Child counter count {childCounterCount}
      <button onClick={() => setChildCounterCount(childCounterCount + 1)}>+</button>
      <button onClick={() => setForkedCounters([...forkedCounters, { id: uuid(), initialCount: childCounterCount }])}>
          Fork Counter with this value
      </button>
      {
        forkedCounters.map((forkedCounter, index) => (
          <ChildCounter key={index} forkedCounter={forkedCounter} counterIndex={`${counterIndex}.${index + 1}`} />
        ))
      }
    </>
  )
};

export default function() {
  const [count, setCount] = useState(0);
  const [forkedCounters, setForkedCounters] = useState([]);
  useDebugValue(count);
  
  return (
    <>
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
          {count}
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setForkedCounters([...forkedCounters, { id: uuid(), initialCount: count }])}>
          Fork Counter with this value
        </button>
        {
          forkedCounters.map((forkedCounter, index) => (
            <ChildCounter key={index} forkedCounter={forkedCounter} counterIndex={`${1}.${index + 1}`} />
          ))
        }
      </div>
    </>
  );
}
