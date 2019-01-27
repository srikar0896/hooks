import React, { useState } from "react";
import useDebounced from '../hooks/useDebounced';

export default function() {
  const [value, setValue] = useState('', 1000);
  const debouncedValue = useDebounced(value, 2000);

  return (
    <div className="App">
      <div>
        <input
          value={value}
          placeholder="type something"
          type="text"
          onChange={(e) =>setValue(e.target.value)}
        />
        <div>
          <span>
            value - {value}
          </span>
        </div>
        <div>
        <span>
          debounced value - {debouncedValue}
        </span>
        </div>
      </div>
    </div>
  );
}
