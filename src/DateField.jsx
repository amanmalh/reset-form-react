import React, { useState, useImperativeHandle, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateField = forwardRef(({ value }, ref) => {
  const dateinMills = Date.parse(value);
  const date = new Date(dateinMills);
  const [startDate, setStartDate] = useState(date);

  useImperativeHandle(ref, () => ({
    reset: () => {
      const dateinMills = Date.parse(value);
      const date = new Date(dateinMills);
      setStartDate(date);
    },
  }));
  return (
    <DatePicker
      className="form-control"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
  );
});

export default DateField;
