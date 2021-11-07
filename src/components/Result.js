import React from "react";
const Result = ({ heading, subHeading, price }) => {
  return (
    <div className="result">
      <div className="content">
        <p>{heading}</p>
        <small>/ {subHeading}</small>
      </div>
      <div className="price">
        $<span id="tipTotal">{price}</span>
      </div>
    </div>
  );
};

export default Result;
