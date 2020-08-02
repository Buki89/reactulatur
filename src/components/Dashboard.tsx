import React, { useState, useEffect } from "react";
import Display from "./Display";
import Buttons from "./Buttons";
import { makeResult, operandKeyCodes } from "../lib/helper";
import { Frame, Box, Row } from "../styles/dashboard";
import {
  TiPlus,
  TiMinus,
  TiTimes,
  TiDivide,
  TiBackspace,
} from "react-icons/ti";
import { FaSquareRootAlt, FaPercent } from "react-icons/fa";

const Dashboard = () => {
  // TODO: Refactor
  const [state, setState] = useState({
    currentValue: "",
    previousValue: "",
    operand: "",
    expression: "",
    wasCalculated: false,
  });
  const [currentValue, setCurrentValue] = useState("");
  const [previousValue, setPreviousValue] = useState("");
  const [operand, setOperand] = useState("");
  const [expression, setExpression] = useState("");
  const [wasCalculated, setWasCalculated] = useState(false);

  const handleAddOperand = (val: string): void => {
    if (currentValue) {
      setOperand(val);
      setPreviousValue(currentValue);
      setCurrentValue("");
      setExpression(`${currentValue} ${val} `);
      setWasCalculated(false);
    }
  };

  const handleAddNumber = (number: string): void => {
    //erase result then add number
    if (currentValue && wasCalculated) {
      setWasCalculated(false);
      setCurrentValue(number);
      //add number
    } else {
      if (currentValue === "0" && number !== ".") {
      } else {
        setCurrentValue((currentValue) => currentValue + number);
      }
    }
  };

  const handleResult = (): void => {
    if (previousValue && currentValue && operand) {
      setWasCalculated(true);
      setCurrentValue(makeResult(previousValue, currentValue, operand));
      setOperand("");
      setPreviousValue("");
      setExpression(expression.concat(currentValue, " ="));
    }
  };

  const handleDeleteNumber = (): void => {
    setCurrentValue(currentValue.slice(0, currentValue.length - 1));
  };

  const handleClearCurrentValue = (): void => {
    setCurrentValue("");
  };

  const handleClearInputs = (): void => {
    setCurrentValue("");
    setPreviousValue("");
    setOperand("");
    setExpression("");
  };

  const handleChangeSign = (): void => {
    setCurrentValue((parseInt(currentValue) * -1).toString());
  };

  const handleAddComma = (comma: string): void => {
    if (currentValue && !/,/g.test(currentValue)) {
      setCurrentValue(`${currentValue}${comma}`);
    }
  };

  const handleSquareRoot = (operand: string): void => {
    if (currentValue) {
      setExpression(`${operand}${currentValue}`);
      setCurrentValue(Math.sqrt(parseFloat(currentValue)).toString());
      setOperand("");
      setWasCalculated(true);
    }
  };

  const handleSquare = (): void => {
    if (currentValue) {
      setExpression(`${currentValue}²`);
      setCurrentValue(Math.pow(parseFloat(currentValue), 2).toString());
      setOperand("");
      setWasCalculated(true);
    }
  };

  const handleOneDividedbyX = (): void => {
    if (currentValue) {
      setExpression(`1/${currentValue}`);
      setCurrentValue((1 / parseFloat(currentValue)).toString());
      setOperand("");
      setWasCalculated(true);
    }
  };

  // useEffect(() => {
  //   console.log("currentValue : " + currentValue);
  //   console.log("previousValue : " + previousValue);
  //   console.log("operand : " + operand);
  //   console.log("wasCalculated : " + wasCalculated);
  // }, [currentValue, operand, previousValue, wasCalculated]);

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
      if (keyCode === 110) {
        handleAddComma(".");
      }
      if (keyCode === 8) {
        handleDeleteNumber();
      }
      console.log(keyCode, key);
    }

    document.addEventListener("keyup", handlekeydownEvent);
    return () => {
      document.removeEventListener("keyup", handlekeydownEvent);
    };
  });

  console.log("app render");
  console.log(state);

  return (
    <Frame>
      <Display expression={expression} result={currentValue} />
      <Box>
        <Row>
          <Buttons
            buttonAttr={[
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
            ]}
          />
        </Row>
        <Row>
          <Buttons
            buttonAttr={[
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
            ]}
          />
        </Row>
        <Row>
          <Buttons
            buttonAttr={[
              { value: "7", handleClick: handleAddNumber },
              { value: "8", handleClick: handleAddNumber },
              { value: "9", handleClick: handleAddNumber },
              {
                value: "*",
                symbol: <TiTimes />,
                handleClick: handleAddOperand,
              },
            ]}
          />
        </Row>
        <Row>
          <Buttons
            buttonAttr={[
              { value: "4", handleClick: handleAddNumber },
              { value: "5", handleClick: handleAddNumber },
              { value: "6", handleClick: handleAddNumber },
              {
                value: "-",
                symbol: <TiMinus />,
                handleClick: handleAddOperand,
              },
            ]}
          />
        </Row>
        <Row>
          <Buttons
            buttonAttr={[
              { value: "1", handleClick: handleAddNumber },
              { value: "2", handleClick: handleAddNumber },
              { value: "3", handleClick: handleAddNumber },
              { value: "+", symbol: <TiPlus />, handleClick: handleAddOperand },
            ]}
          />
        </Row>
        <Row>
          <Buttons
            buttonAttr={[
              { value: "±", handleClick: handleChangeSign },
              { value: "0", handleClick: handleAddNumber },
              { value: ".", symbol: ",", handleClick: handleAddComma },
              { value: "=", handleClick: handleResult },
            ]}
          />
        </Row>
      </Box>
    </Frame>
  );
};

export default Dashboard;
