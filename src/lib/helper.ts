export enum Operand {
  plus = "+",
  minus = "-",
  multiPly = "X",
  divide = "÷",
}

export const makeResult = (
  first: string,
  second: string,
  operand: string
): string => {
  const firstNumber = parseInt(first, 10);
  const secondNumber = parseInt(second, 10);
  switch (operand) {
    case Operand.plus:
      return (firstNumber + secondNumber).toString();
    case Operand.minus:
      return (firstNumber - secondNumber).toString();
    case Operand.multiPly:
      return (firstNumber * secondNumber).toString();
    case Operand.divide:
      return (firstNumber / secondNumber).toString();
  }
  return "";
};
