import React from "react";
import Button from "./Button";

interface Props {
  values: Array<string>;
  handleClick: any;
}

const Buttons = (props: Props) => {
  return (
    <>
      {props.values.map((value: string, index: number) => (
        <Button key={index} handleClick={props.handleClick} value={value} />
      ))}
    </>
  );
};

export default Buttons;
