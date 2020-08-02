import React from "react";
import { Box, Expression, Result } from "../styles/display";

interface Props {
  expression: string;
  result: string;
}

const Display = (props: Props) => {
  const { expression, result } = props;
  return (
    <Box>
      <Expression>{expression.replace(".", ",")}</Expression>
      <Result>{result.replace(".", ",")}</Result>
    </Box>
  );
};

export default Display;
