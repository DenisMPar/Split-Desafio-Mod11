import React from "react";
import { BaseInput, Label } from "./styled";
type props = {
  name: string;
  label?: string;
  placeHolder?: string;
  id: string;
  type: string;
};

const Input: React.FC<props> = (props) => {
  return (
    <Label
      htmlFor={props.name}
      style={{
        display: "flex",
        flexDirection: "column",
        fontSize: "24px",
      }}
    >
      {props.label}
      <BaseInput
        type={props.type}
        id={props.id}
        placeholder={props.placeHolder}
      ></BaseInput>
    </Label>
  );
};

export default Input;
