import React from "react";
import styled from "styled-components";

const Result = styled.div`
  font-size: 75px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Expression = styled.div`
  font-size: 25px;
  height: 30px;
  display: flex;
  align-items: center;
`;
const Box = styled.div`
  padding: 5px;
`;

interface Props {
  expression: string;
  result: string;
}

const Display = (props: Props) => {
  const { expression, result } = props;
  return (
    <Box>
      <Expression>{expression}</Expression>
      <Result>{result}</Result>
    </Box>
  );
};

export default Display;
