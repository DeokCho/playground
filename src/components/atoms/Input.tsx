import React from "react";
import { observer } from "mobx-react";

interface PropTypes {
  text: string;
  onChange: (arg: string) => void;
}

const Input: React.FC<PropTypes> = ({ text, onChange }) => {
  const handleOnChange = (e: any) => {
    e.preventDefault();
    onChange && onChange(e.target.value);
  };
  return (
    <input
      type="text"
      value={text}
      onChange={handleOnChange}
    />
  );
};

export default observer(Input);
