import React from "react";
import { observer } from "mobx-react";

interface PropTypes {
  type?: "submit" | "button" | "reset";
  title?: string;
  className?: string;
  onClick: Function;
}

const Button: React.FC<PropTypes> = ({
  title,
  type = "submit",
  className,
  onClick,
}) => {
  const handdleOnClick = (event: any) => {
    event.preventDefault();
    onClick && onClick();
  };
  return (
    <button
      type={type}
      className={className}
      onClick={(event) => handdleOnClick(event)}
    >
      {title}
    </button>
  );
};

export default observer(Button);
