import React from "react";

const Button = ({ value, id, name, title }) => {
  return (
    <div className="button-wrapper">
      <input type="radio" value={value} id={id} name={name} />
      <label htmlFor={id}>
        <span>{title}</span>
      </label>
    </div>
  );
};

export default Button;
