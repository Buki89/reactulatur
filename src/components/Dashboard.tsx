import React, { useEffect } from "react";
import Display from "./Display";
import Buttons from "./Buttons";
import { ButtonProps } from "./Button";
import { operandKeyCodes, Operand } from "../lib/helper";
import { Frame, Box, Row } from "../styles/dashboard";
import {
  TiPlus,
  TiMinus,
  TiTimes,
  TiDivide,
  TiBackspace,
} from "react-icons/ti";
import { FaSquareRootAlt, FaPercent } from "react-icons/fa";
import { useCalculator } from "./useCalculator";

export const Dashboard: React.FC = () => {
  const {
    state,
    handleAddOperand,
    handleAddNumber,
    handleResult,
    handleDeleteNumber,
    handleClearCurrentValue,
    handleClearInputs,
    handleChangeSign,
    handleAddComma,
    handleSquareRoot,
    handleSquare,
    handleOneDividedbyX,
  } = useCalculator();

  const { currentValue, expression } = state;

  // TODO: Refactor
  useEffect(() => {
    function handlekeydownEvent(event: any) {
      const { key, keyCode } = event;
      if (keyCode >= 96 && keyCode <= 105) {
        handleAddNumber(key);
      }
      if (operandKeyCodes.includes(keyCode)) {
        handleAddOperand(key);
      }
      if (keyCode === 13) {
        handleResult();
      }
      if (keyCode === 110 || keyCode === 188) {
        handleAddComma(".");
      }
      if (keyCode === 8) {
        handleDeleteNumber();
      }
    }

    document.addEventListener("keyup", handlekeydownEvent);
    return () => {
      document.removeEventListener("keyup", handlekeydownEvent);
    };
  });

  console.log("app render");
  console.log(state);

  const rows: Array<Array<ButtonProps>> = [
    [
      {
        symbol: <FaPercent />,
        value: "%",
        handleClick: handleAddOperand,
      },
      { value: "CE", handleClick: handleClearCurrentValue },
      { value: "C", handleClick: handleClearInputs },
      {
        value: "←",
        symbol: <TiBackspace />,
        handleClick: handleDeleteNumber,
      },
    ],
    [
      { value: "1/x", handleClick: handleOneDividedbyX },
      { value: "x²", handleClick: handleSquare },
      {
        value: "√",
        symbol: <FaSquareRootAlt />,
        handleClick: handleSquareRoot,
      },
      {
        value: "/",
        symbol: <TiDivide />,
        handleClick: handleAddOperand,
      },
    ],
    [
      { value: "7", handleClick: handleAddNumber },
      { value: "8", handleClick: handleAddNumber },
      { value: "9", handleClick: handleAddNumber },
      {
        value: Operand.multiply,
        symbol: <TiTimes />,
        handleClick: handleAddOperand,
      },
    ],
    [
      { value: "4", handleClick: handleAddNumber },
      { value: "5", handleClick: handleAddNumber },
      { value: "6", handleClick: handleAddNumber },
      {
        value: Operand.minus,
        symbol: <TiMinus />,
        handleClick: handleAddOperand,
      },
    ],
    [
      { value: "1", handleClick: handleAddNumber },
      { value: "2", handleClick: handleAddNumber },
      { value: "3", handleClick: handleAddNumber },
      {
        value: Operand.plus,
        symbol: <TiPlus />,
        handleClick: handleAddOperand,
      },
    ],
    [
      { value: "±", handleClick: handleChangeSign },
      { value: "0", handleClick: handleAddNumber },
      { value: ".", symbol: ",", handleClick: handleAddComma },
      { value: "=", handleClick: handleResult },
    ],
  ];

  return (
    <Frame>
      <Display expression={expression} result={currentValue} />
      <Box>
        {rows.map((row: Array<ButtonProps>, index: number) => (
          <Row key={index}>
            <Buttons buttons={row} />
          </Row>
        ))}
      </Box>
    </Frame>
  );
};
