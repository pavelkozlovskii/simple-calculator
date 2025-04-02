export const calculate = (firstOperand, secondOperand, sign) => {
  const operand1 = parseFloat(firstOperand);
  const operand2 = parseFloat(secondOperand);

  switch (sign) {
    case "+":
      return (operand1 + operand2).toString();
    case "-":
      return (operand1 - operand2).toString();
    case "X":
      return (operand1 * operand2).toString();
    case "/":
      if (operand2 === 0) {
        return "Ошибка";
      }

      return (operand1 / operand2).toString();
  }
};
