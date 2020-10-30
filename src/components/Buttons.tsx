import React from "react";
import Button, { ButtonProps } from "./Button";

interface Props {
  buttons: Array<ButtonProps>;
}

const Buttons = (props: Props) => {
  return (
    <>
      {props.buttons.map((button: ButtonProps, index: number) => (
        <Button
          key={index}
          handleClick={button.handleClick}
          value={button.value}
          symbol={button.symbol ? button.symbol : button.value}
        />
      ))}
    </>
  );
};

export default Buttons;
