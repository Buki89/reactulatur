import React from "react";
import Number from "./Number";
import styled from "styled-components";

const Box = styled.div`
  margin: 30px;
  width: 360px;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
`;

interface Props {
  handleClick: any;
}

const Numbers = (props: Props) => {
  const { handleClick } = props;
  return (
    <Box>
      <Number
        numbers={["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]}
        handleClick={handleClick}
      />
    </Box>
  );
};

export default Numbers;
