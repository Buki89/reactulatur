import React, { SyntheticEvent } from "react";
import { Body } from "../styles/button";

interface Props {
  value: string;
  handleClick: any;
  symbol: any;
}

const Button = (props: Props) => {
  return (
    <Body
      value={props.value}
      onClick={(e: SyntheticEvent) => props.handleClick(props.value)}
    >
      <div>{props.symbol}</div>
    </Body>
  );
};

export default Button;
