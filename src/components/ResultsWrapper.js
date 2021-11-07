import React from "react";
import Result from "./Result";
import ResetButton from "./FormComponents/ResetButton";
const ResultsWrapper = () => {
  return (
    <div className="wrapper-results">
      <Result heading="Tip Amount" subHeading="person" price="0.00" />
      <Result heading="Total" subHeading="person" price="0.00" />
      <ResetButton />
    </div>
  );
};

export default ResultsWrapper;
