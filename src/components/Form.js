import React from "react";
import Field from "./FormComponents/Field";
import ButtonsGroup from "./ButtonsGroup";
import IconDollar from "./logos/IconDollar.svg";
import IconPerson from "./logos/IconPerson.svg";
const Form = () => {
  return (
    <form className="form-wrapper" id="form">
      <Field
        title="Bill"
        id="bill"
        step="0.01"
        value="0.00"
        name="bill"
        logo={IconDollar}
      />
      <ButtonsGroup />
      <Field
        title="Number of People"
        id="people"
        step=""
        value="0"
        name="people"
        logo={IconPerson}
      />
    </form>
  );
};

export default Form;
