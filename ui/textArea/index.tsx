import React from "react";
import { TextArea, Label } from "./styled";
type props = {
  name: string;
  label?: string;
  placeHolder?: string;
  required?: boolean;
  id: string;
};

const TextAreaComp: React.FC<props> = (props) => {
  return (
    <Label htmlFor={props.name}>
      {props.label}
      <TextArea
        id={props.id}
        name={props.name}
        required={props.required}
      ></TextArea>
    </Label>
  );
};

export default TextAreaComp;
