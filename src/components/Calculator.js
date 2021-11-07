import React from "react";
import Form from "../components/Form";
import ResultsWrapper from "./ResultsWrapper";
const Calculator = () => {
  return (
    <div className="calculator-wrapper">
      <div className="col-one-half">
        <Form />
      </div>
      <div className="col-one-half">
        <ResultsWrapper />
      </div>
    </div>
  );
};

export default Calculator;
