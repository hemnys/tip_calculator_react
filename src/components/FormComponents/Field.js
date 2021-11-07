import React from "react";
const Field = ({ id, title, step, value, name, logo }) => {
  return (
    <div className="input-group">
      <label htmlFor={id}>{title}</label>
      <div className="input-logo">
        <input
          type="number"
          step={step}
          id={id}
          defaultValue={value}
          name={name}
        />
        <span className="icon">
          <img src={logo} alt={name} />
        </span>
      </div>
    </div>
  );
};

export default Field;
