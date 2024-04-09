import "./style.css";
import { useState } from "react";
const Input = ({ labelText = "UserName", type = "text", onChange, name}) => {
  const [val, setVal] = useState('')
  const onInputChange = event => {
    setVal(event.target.value);
    onChange(event.target.value);
  }
  return (
    <>
      <div className="mb-2 mt-8">{labelText}</div>
      <main className="input-container rounded-md flex">
        <input
          className="w-full h-full pl-4 rounded text-black"
          type={type}
          onChange={event => onInputChange(event)}
          value={val}
        ></input>
      </main>
    </>
  );
};
export default Input;
