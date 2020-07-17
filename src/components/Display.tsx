import React from "react";
import styled from "styled-components";

const Body = styled.div`
  margin: 30px auto;
  padding: 30px;
  display: flex;
`;

const Input = styled.div`
  width: 400px;
  height: 100px;
  font-size: 75px;
  border: 2px solid black;
  border-radius: 5px;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  background-color: cornsilk;
`;

interface Props {
  value: number;
}

const Display = (props: Props) => {
  const { value } = props;
  return (
    <Body>
      <Input>{value}</Input>
    </Body>
  );
};

export default Display;
