import React from "react";
import Button from "./Button";

interface attr {
  symbol?: string | any;
  value: string;
  handleClick: (arg: string) => void;
}

interface Props {
  buttonAttr: Array<attr>;
}

const Buttons = (props: Props) => {
  return (
    <>
      {props.buttonAttr.map((attributes: attr, index: number) => (
        <Button
          key={index}
          handleClick={attributes.handleClick}
          value={attributes.value}
          symbol={attributes.symbol ? attributes.symbol : attributes.value}
        />
      ))}
    </>
  );
};

export default Buttons;
