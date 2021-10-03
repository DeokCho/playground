import React from "react";
import { observer } from "mobx-react";

interface PropTypes {
  text: string;
  onChange: (arg: string) => void;
  placeholder?: string;
  type?: string;
  className?: string;
}

const Input: React.FC<PropTypes> = ({
  text,
  onChange,
  placeholder = "",
  type = "text",
  className,
}) => {
  const handleOnChange = (e: any) => {
    e.preventDefault();
    onChange && onChange(e.target.value);
  };
  return (
    <input
      className={className}
      type={type}
      value={text}
      onChange={handleOnChange}
      placeholder={placeholder}
    />
  );
};

export default observer(Input);
