import React from "react";
import { BaseInput, Label } from "./styled";
type props = {
  name: string;
  label?: string;
  placeHolder?: string;
  required: boolean;
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
        required={props.required}
      ></BaseInput>
    </Label>
  );
};

export default Input;
