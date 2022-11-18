import React from "react";
import { TextArea, Label } from "./styled";
type props = {
  name: string;
  label?: string;
  placeHolder?: string;
  id: string;
};

const TextAreaComp: React.FC<props> = (props) => {
  return (
    <Label htmlFor={props.name}>
      {props.label}
      <TextArea id={props.id} name={props.name}></TextArea>
    </Label>
  );
};

export default TextAreaComp;
