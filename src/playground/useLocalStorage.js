import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export default function (props) {
  const [count, setCount] = useLocalStorage('count', 0);
  return (
    <>
      <button onClick={() => {setCount(count + 1)}}>+</button>
        {count}
      <button onClick={() => { setCount(count - 1) }}>-</button>
    </>
  ); 
};
