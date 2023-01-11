import React, { useState, useImperativeHandle, forwardRef } from "react";

const TextField = forwardRef(({ value }, ref) => {
  const [currentValue, setCurrentValue] = useState(value);
  useImperativeHandle(ref, () => ({
    reset: () => {
      setCurrentValue(value);
    },
  }));
  return (
    <input
      className="form-control"
      type="text"
      value={currentValue}
      onChange={(e) => {
        setCurrentValue(e.target.value);
      }}
    />
  );
});

export default TextField;
