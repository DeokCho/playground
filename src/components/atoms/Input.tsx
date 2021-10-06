import React from "react";
import { observer } from "mobx-react";

interface PropTypes {
  text: string;
  onChange?: (arg: string) => void;
  placeholder?: string;
  type?: string;
  className?: string;
  disabled?: boolean;
  keydown?: () => any;
}

const Input: React.FC<PropTypes> = ({
  text,
  onChange,
  placeholder = "",
  type = "text",
  className,
  disabled,
  keydown,
}) => {
  const handleOnChange = (e: any) => {
    e.preventDefault();
    onChange && onChange(e.target.value);
  };

  const handleOnKeyDown = (e: any) => {
    e.key === "Enter" && keydown && keydown();
  };

  return (
    <input
      className={className}
      type={type}
      value={text}
      onChange={handleOnChange}
      placeholder={placeholder}
      disabled={disabled}
      onKeyPress={handleOnKeyDown}
    />
  );
};

export default observer(Input);
