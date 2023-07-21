import React from "react";
import "./FormInput.css"

const FormInput = (props) => {
  return (
    <div>
      <label className="label" htmlFor={props.id}>{props.labelName}</label>
      <input
      className="form-input"
        type={props.inputType}
        placeholder={props.placeholder || "..."}
        id={props.id}
      />
    </div>
  );
};

export default FormInput;
