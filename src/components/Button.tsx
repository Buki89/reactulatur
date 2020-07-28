import React, { SyntheticEvent } from "react";
import styled from "styled-components";

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 105px;
  background-color: #4d4d4d;
  font-size: 40px;
  font-family: cursive;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
`;

interface Props {
  value: string;
  handleClick: any;
}

const Button = (props: Props) => {
  return (
    <Body onClick={(e: SyntheticEvent) => props.handleClick(props.value)}>
      <div>{props.value}</div>
    </Body>
  );
};

export default Button;
