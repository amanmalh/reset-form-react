import React, { useRef } from "react";
import Field from "./Field";
import "bootstrap/dist/css/bootstrap.min.css";

const INITIAL_DATA = {
  username: {
    type: "text",
    value: "Aman",
  },
  dob: {
    type: "date",
    value: "01/01/1995",
  },
};

function Form() {
  const fieldNames = Object.keys(INITIAL_DATA);
  const fieldRefs = useRef([]);
  const handleReset = (e) => {
    e.preventDefault();

    fieldNames.forEach((_, idx) => {
      if (fieldRefs.current[idx]) fieldRefs.current[idx].reset();
    });
  };

  return (
    <div className="container h-100 w-25">
      <form>
        <h4>Reset this form by clicking on the 'Reset' button</h4>
        <br />
        {fieldNames.map((field, idx) => (
          <>
            <Field
              key={field}
              type={INITIAL_DATA[field].type}
              value={INITIAL_DATA[field].value}
              ref={(e) => (fieldRefs.current[idx] = e)}
            />
            <br />
          </>
        ))}
        <br />
        <button className="btn btn-dark w-100" onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  );
}

export default Form;
