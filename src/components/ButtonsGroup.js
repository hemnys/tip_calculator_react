import React from "react";
import Button from "./FormComponents/Button";
import CustomButton from "./FormComponents/CustomButton";
const ButtonsGroup = () => {
  return (
    <div className="buttons-group">
      <label>Select Tip %</label>
      <div className="buttons-wrapper">
        <Button value="5" id="5" name="tip" title="5%" />
        <Button value="10" id="10" name="tip" title="10%" />
        <Button value="15" id="15" name="tip" title="15%" />
        <Button value="20" id="20" name="tip" title="20%" />
        <Button value="50" id="50" name="tip" title="50%" />
        <CustomButton />
      </div>
    </div>
  );
};

export default ButtonsGroup;
