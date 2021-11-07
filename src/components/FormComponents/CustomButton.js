import React from "react";
const CustomButton = () => {
  return (
    <div className="button-wrapper button-wrapper-custom">
      <input type="radio" value="custom" id="custom" name="tip" />
      <label htmlFor="custom">
        <span>Custom</span>
      </label>
      <input
        type="number"
        name="customTip"
        value="0"
        className="custom-tip"
        id="customTip"
      />
    </div>
  );
};

export default CustomButton;
