import React from "react";
import { BaseInput, Label } from "./styled";
type props = {
  name: string;
  label?: string;
  placeHolder?: string;
};

const Input: React.FC<props> = (props) => {
  return (
    <Label
      style={{ display: "flex", flexDirection: "column", fontSize: "24px" }}
    >
      {props.label}
      <BaseInput placeholder={props.placeHolder}></BaseInput>
    </Label>
  );
};

export default Input;
