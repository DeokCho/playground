import React from "react";
import { FormGroup, Label } from "reactstrap";
import { observer } from "mobx-react";

import { Input } from "src/components";

interface PropTypes {
  title?: string;
  text: string;
  setText: (arg: string) => void;
  type?: string;
  placeholder?: string;
}

const LabelInput: React.FC<PropTypes> = ({
  title,
  text,
  setText,
  type = "text",
  placeholder,
}) => {
  return (
    <FormGroup>
      <Label>{title}</Label>
      <br />
      <Input
        text={text}
        onChange={(value: string) => setText(value)}
        type={type}
        placeholder={placeholder}
      />
    </FormGroup>
  );
};

export default observer(LabelInput);
