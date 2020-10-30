import { useState } from "react";
import { Operand, handleLargeNumber, makeResult } from "../lib/helper";

export interface RowType {
  group: string;
  symbol?: JSX.Element | string | undefined;
  value: string;
}

export const useCalculator = () => {
  const [state, setState] = useState({
    currentValue: "",
    previousValue: "",
    operand: Operand.empty,
    expression: "",
    wasCalculated: false,
  });

  const {
    currentValue,
    previousValue,
    expression,
    wasCalculated,
    operand,
  } = state;

  const handleAddOperand = (operand: Operand): void => {
    if (currentValue) {
      setState({
        ...state,
        operand,
        previousValue: currentValue,
        currentValue: "",
        expression: `${handleLargeNumber(currentValue)} ${operand} `,
        wasCalculated: false,
      });
    }
  };

  const handleAddNumber = (number: string): void => {
    console.log("handleAddNumber");
    //erase result then add number
    if (currentValue && wasCalculated) {
      setState({ ...state, wasCalculated: false, currentValue: number });
      //add number
    } else {
      if (currentValue === "0" && number !== ".") {
      } else {
        setState({ ...state, currentValue: currentValue + number });
      }
    }
  };

  const handleResult = (): void => {
    if (previousValue && currentValue && operand) {
      setState({
        ...state,
        wasCalculated: true,
        currentValue: makeResult(previousValue, currentValue, operand),
        operand: Operand.empty,
        previousValue: "",
        expression: expression.concat(handleLargeNumber(currentValue), " ="),
      });
    }
  };

  const handleDeleteNumber = (): void => {
    setState({
      ...state,
      currentValue: currentValue.slice(0, currentValue.length - 1),
    });
  };

  const handleClearCurrentValue = (): void => {
    setState({ ...state, currentValue: "" });
  };

  const handleClearInputs = (): void => {
    setState({
      ...state,
      currentValue: "",
      previousValue: "",
      operand: Operand.empty,
      expression: "",
    });
  };

  const handleChangeSign = (): void => {
    setState({
      ...state,
      currentValue: (parseInt(currentValue) * -1).toString(),
    });
  };

  const handleAddComma = (comma: string): void => {
    if (currentValue && !/,/g.test(currentValue)) {
      setState({ ...state, currentValue: `${currentValue}${comma}` });
    }
  };

  const handleSquareRoot = (operand: string): void => {
    if (currentValue) {
      setState({
        ...state,
        expression: `${operand}${handleLargeNumber(currentValue)}`,
        currentValue: Math.sqrt(parseFloat(currentValue)).toString(),
        operand: Operand.empty,
        wasCalculated: true,
      });
    }
  };

  const handleSquare = (): void => {
    if (currentValue) {
      setState({
        ...state,
        expression: `${currentValue}²`,
        currentValue: Math.pow(parseFloat(currentValue), 2).toString(),
        operand: Operand.empty,
        wasCalculated: true,
      });
    }
  };

  const handleOneDividedbyX = (): void => {
    if (currentValue) {
      setState({
        ...state,
        expression: `1/${handleLargeNumber(currentValue)}`,
        currentValue: (1 / parseFloat(currentValue)).toString(),
        operand: Operand.empty,
        wasCalculated: true,
      });
    }
  };

  return {
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
    state,
    setState,
  };
};

// export const rows: Array<Array<RowType>> = [
//   [
//     {
//       group: "diviteby",
//       value: "1/x",
//     },
//     {
//       group: "square",
//       value: "x²",
//     },
//     {
//       group: "squareRoot",
//       symbol: "√",
//       value: "√",
//     },
//     {
//       group: "operand",
//       symbol: "/",
//       value: Operand.divide,
//     },
//   ],
//   [
//     {
//       group: "digits",
//       symbol: "7",
//       value: "7",
//     },
//     {
//       group: "digits",
//       symbol: "8",
//       value: "8",
//     },
//     {
//       group: "digits",
//       symbol: "9",
//       value: "9",
//     },
//     {
//       group: "operand",
//       symbol: "*",
//       value: Operand.multiply,
//     },
//   ],
//   [
//     {
//       group: "digits",
//       symbol: "4",
//       value: "4",
//     },
//     {
//       group: "digits",
//       symbol: "5",
//       value: "5",
//     },
//     {
//       group: "digits",
//       symbol: "6",
//       value: "6",
//     },
//     {
//       group: "operand",
//       symbol: "-",
//       value: Operand.minus,
//     },
//   ],
//   [
//     {
//       group: "digits",
//       symbol: "1",
//       value: "1",
//     },
//     {
//       group: "digits",
//       symbol: "2",
//       value: "2",
//     },
//     {
//       group: "digits",
//       symbol: "3",
//       value: "3",
//     },
//     {
//       group: "operand",
//       symbol: "+",
//       value: Operand.plus,
//     },
//   ],
//   [
//     {
//       group: "sign",
//       symbol: "±",
//       value: "±",
//     },
//     {
//       group: "digits",
//       symbol: "0",
//       value: "0",
//     },
//     {
//       group: "comma",
//       symbol: ",",
//       value: ".",
//     },
//     {
//       group: "result",
//       value: "=",
//     },
//   ],
// ];
