import React from "react";
import styled from "styled-components";

const Box = styled.div`
  margin: 10px;
  height: 75px;
  width: 75px;
  border-radius: 8px;
  display: flex;
  font-size: 60px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  color: #000;
  cursor: pointer;
`;

interface Props {
  handleClick: any;
  numbers: Array<any>;
}

const Number = (props: Props) => {
  const { handleClick, numbers } = props;
  return (
    <>
      {numbers.map((number, index) => {
        return (
          <Box key={index} onClick={(e) => handleClick(number)}>
            {number}
          </Box>
        );
      })}
    </>
  );
};

export default Number;
