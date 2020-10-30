export enum Operand {
  plus = "+",
  minus = "-",
  multiply = "*",
  divide = "/",
  exp = "xⁿ",
  sqrt = "√",
  del = "←",
  negation = "±",
  empty = "",
}

export const operandKeyCodes = [106, 107, 109, 111];

export const makeResult = (
  first: string,
  second: string,
  operand: Operand
): string => {
  const firstNumber = parseFloat(first);
  const secondNumber = parseFloat(second);
  switch (operand) {
    case Operand.plus:
      return (firstNumber + secondNumber).toString();
    case Operand.minus:
      return (firstNumber - secondNumber).toString();
    case Operand.multiply:
      return (firstNumber * secondNumber).toString();
    case Operand.divide:
      return (firstNumber / secondNumber).toString();
    case Operand.exp:
      return Math.pow(firstNumber, secondNumber).toString();
    default:
    case Operand.sqrt:
      return Math.sqrt(firstNumber).toFixed(5).toString();
  }
};

export const handleLargeNumber = (number: string): string => {
  if (number.length > 12) {
    return parseFloat(number).toExponential(6).toString();
  }
  return number;
};
