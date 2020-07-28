import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Display from "./Display";
import Buttons from "./Buttons";
import { makeResult } from "../lib/helper";

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  width: 420px;
  height: auto;
  background-color: #fff;
  padding: 0;
`;

const Row = styled.div`
  display: flex;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

const Dashboard = () => {
  const [currentValue, setCurrentValue] = useState("");
  const [previousValue, setPreviousValue] = useState("");
  const [operand, setOperand] = useState("");
  const [expression, setExpression] = useState("");

  const handleClick = (val: string) => {
    const regEx = /\d/g;
    if (val !== "=") {
      if (regEx.test(val)) {
        setCurrentValue(currentValue + val);
      } else {
        setOperand(val);
        setPreviousValue(currentValue);
        setCurrentValue("");
      }
    } else {
      setCurrentValue(makeResult(previousValue, currentValue, operand));
      setOperand("");
    }
  };

  useEffect(() => {
    console.log("currentValue : " + currentValue);
    console.log("previousValue : " + previousValue);
    console.log("operand : " + operand);
  }, [currentValue, operand, previousValue]);

  return (
    <Frame>
      <Display expression={expression} result={currentValue} />
      <Box>
        <Row>
          <Buttons handleClick={handleClick} values={["%", "x²", "√", "÷"]} />
        </Row>
        <Row>
          <Buttons handleClick={handleClick} values={["7", "8", "9", "X"]} />
        </Row>
        <Row>
          <Buttons handleClick={handleClick} values={["4", "5", "6", "-"]} />
        </Row>
        <Row>
          <Buttons handleClick={handleClick} values={["1", "2", "3", "+"]} />
        </Row>
        <Row>
          <Buttons handleClick={handleClick} values={["±", "0", ",", "="]} />
        </Row>
      </Box>
    </Frame>
  );
};

export default Dashboard;
