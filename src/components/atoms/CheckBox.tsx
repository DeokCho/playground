import React, { useState } from "react";
import { observer } from "mobx-react-lite";

interface PropTypes {
  title?: string;
  onClick?: Function;
  checked: boolean;
}

const CheckBox: React.FC<PropTypes> = ({
  title,
  onClick,
  checked,
}) => {
  const handleOnClick = () => {
    onClick && onClick(!checked);
  };
  return (
    <>
      <input
        type="checkbox"
        checked={checked}
        onClick={handleOnClick}
      />
      {title}
    </>
  );
};

export default observer(CheckBox);
