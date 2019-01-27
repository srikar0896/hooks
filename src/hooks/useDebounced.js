import React, { useState, useEffect } from 'react';

export default function (value, delay = 3000) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(timer)
    }
  }, [value, delay]);
  
  return debouncedValue;
};
