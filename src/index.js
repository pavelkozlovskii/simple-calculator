import "./style.css";
import "./theme.js";
import { calculate } from "./calculation.js";

let firstOperand = "";
let secondOperand = "";
let sign = "";
let isFinished = false;

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const actions = ["-", "+", "X", "/"];

const display = document.querySelector(".display");

const resetToInitial = () => {
  firstOperand = "";
  secondOperand = "";
  sign = "";
  isFinished = false;
  display.textContent = "0";
};

document.querySelector(".AC").onclick = resetToInitial;

document.querySelector(".buttons").onclick = ({ target }) => {
  if (!target.classList.contains("btn") || target.classList.contains("AC")) {
    return;
  }
  const content = event.target.textContent;

  if (numbers.includes(content)) {
    if (isFinished) {
      firstOperand = content;
      secondOperand = "";
      sign = "";
      isFinished = false;
    } else if (secondOperand === "" && sign === "") {
      if (!(content === "." && firstOperand.includes("."))) {
        firstOperand += content;
      }
    } else {
      if (!(content === "." && secondOperand.includes("."))) {
        secondOperand += content;
      }
    }
    display.textContent = secondOperand || firstOperand;

    return;
  }

  if (actions.includes(content)) {
    if (isFinished) isFinished = false;
    if (firstOperand === "") return;
    if (secondOperand !== "") {
      firstOperand = calculate(firstOperand, secondOperand, sign);
      secondOperand = "";
    }
    sign = content;
    display.textContent = sign;

    return;
  }

  if (content === "=") {
    if (!firstOperand || !secondOperand) return;
    firstOperand = calculate(firstOperand, secondOperand, sign);
    sign = "";
    secondOperand = "";
    isFinished = true;
    display.textContent = firstOperand;
  }
};
