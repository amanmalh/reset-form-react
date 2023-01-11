import React, { useRef, useImperativeHandle, forwardRef } from "react";
import TextField from "./TextField";
import DateField from "./DateField";

const Field = forwardRef(({ type, value }, ref) => {
  const textRef = useRef();
  const dateRef = useRef();

  useImperativeHandle(ref, () => ({
    reset: () => {
      switch (type) {
        case "text":
          textRef.current.reset();
          break;
        case "date":
          dateRef.current.reset();
          break;
      }
    },
  }));

  switch (type) {
    case "text":
      return <TextField value={value} ref={textRef} />;
    case "date":
      return <DateField value={value} ref={dateRef} />;
  }
});

export default Field;
