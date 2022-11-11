import { useState } from "react";

const UseInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    const {
      target: { value }
    } = event;

    let willUpdate = true;

    typeof validator === "function" && (willUpdate = validator(value));
    willUpdate && setValue(value);
  };
  console.log("test");

  return { value, onChange };
};

export default UseInput;
