import React, { useState } from 'react';

function useLocalStorage(key, initialValue) {

  const [item, setInnerValue] = useState(() => {
    try {
      return window.localStorage.getItem(key)
        ? JSON.parse(window.localStorage.getItem(key))
        : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = value => {
    setInnerValue(value);
    window.localStorage.setItem(key, JSON.stringify(item));
  };

  return [item, setValue];
}

export default useLocalStorage