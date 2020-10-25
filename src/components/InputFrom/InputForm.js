import React from "react";
import "./InputForm.css";
const InputForm = ({ label, placeholder, type, value, onInput }) => {
  return (
    <label>
      <p className="labelName">{label}</p>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onInput(e.target.value)}
        className="input"
      ></input>
    </label>
  );
};

export default InputForm;
