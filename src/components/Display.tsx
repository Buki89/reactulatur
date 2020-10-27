import React from "react";
import { Box, Expression, Result } from "../styles/display";
import { handleLargeNumber } from "../lib/helper";

interface Props {
  expression: string;
  result: string;
}

const Display = (props: Props) => {
  const { expression, result } = props;

  return (
    <Box>
      <Expression>{expression.replace(".", ",")}</Expression>
      <Result textLength={result.length}>
        {result.length > 15
          ? handleLargeNumber(result).replace(".", ",")
          : result.replace(".", ",")}
      </Result>
    </Box>
  );
};

export default Display;
