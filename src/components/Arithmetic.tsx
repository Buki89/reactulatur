import React from "react";
import Number from "./Number";
import styled from "styled-components";

const Box = styled.div`
  margin: 30px;
  width: 100px;
  display: flex;
  flex-direction: column;
`;

interface Props {
  handleClick: any;
  handleMakeResult: any;
}

const Arithmetic = (props: Props) => {
  const { handleClick, handleMakeResult } = props;

  return (
    <Box>
      <Number handleClick={handleClick} numbers={["+", "-", "*", "/"]} />
      <Number handleClick={handleMakeResult} numbers={["="]} />
    </Box>
  );
};

export default Arithmetic;
