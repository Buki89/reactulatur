import React from "react";
import { Body } from "../styles/button";
import { Operand } from "../lib/helper";

type CalculatorValue = string | Operand;

export interface ButtonProps {
  value: CalculatorValue;
  handleClick: (value: any) => void;
  symbol?: JSX.Element | string | undefined;
}

const Button = (props: ButtonProps) => {
  return (
    //<Body value={props.value} onClick={() => props.handleClick(props.value)}>
    <Body value={props.value} onClick={() => props.handleClick(props.value)}>
      <div>{props.symbol}</div>
    </Body>
  );
};

export default Button;
