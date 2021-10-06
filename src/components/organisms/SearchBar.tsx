import React from "react";
import { observer } from "mobx-react";

import { Input, Button } from "src/components";

interface PropTypes {
  text: string;
  inputClassName?: string;
  onChange: (arg: string) => void;
  placeholder?: string;
  title?: string;
  buttonClassName?: string;
  onClick: () => void;
}

const SearchBar: React.FC<PropTypes> = ({
  text,
  inputClassName,
  onChange,
  placeholder,
  title = "검색",
  buttonClassName,
  onClick,
}) => {
  const handleOnText = (value: string) => {
    onChange && onChange(value);
  };

  const handleOnClick = () => {
    onClick && onClick();
  };

  return (
    <>
      <Input
        type="text"
        text={text || ""}
        className={inputClassName}
        onChange={handleOnText}
        placeholder={placeholder}
        keydown={handleOnClick}
      />
      <Button
        title={title}
        className={buttonClassName}
        onClick={handleOnClick}
      />
    </>
  );
};

export default observer(SearchBar);
