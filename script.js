// assign a variable to button class
const myButtonClasses = document.getElementsByClassName("mybutt"); // result will be an array
// console.log(myButtonClasses)

// assign first mybutton class to variable zero
const zero = myButtonClasses[0];
const one = myButtonClasses[1];
const two = myButtonClasses[2];
const three = myButtonClasses[3];
const four = myButtonClasses[4];
const five = myButtonClasses[5];
const six = myButtonClasses[6];

const add = document.getElementById("add");
const sub = document.getElementById("subtract");
const mul = document.getElementById("multiply");
const divide = document.getElementById("divide");
const equal = document.getElementById("equals");

const operations = ["+", "-", "*", "/"];

const calulateResult = (operandA, operandB, operator) => {
  operandA = parseInt(operandA);
  operandB = parseInt(operandB);
  switch (operator) {
    case "+":
      return operandA + operandB;
    case "-":
      return operandA - operandB;
    case "*":
      return operandA * operandB;
    case "/":
      return operandA / operandB;
  }
};
// get result screen elemnt from DOM => document object model
let out = document.getElementById("output");

// get the current value pf the screen
let previousValue = out.getAttribute("value");

zero.addEventListener("click", function (e) {
  // set the value of the screen old+ new value
  // here previousValue is the exisiting value of result
  out.setAttribute("value", (previousValue += parseInt(e.target.name)));
});

one.addEventListener("click", function (e) {
  out.setAttribute("value", (previousValue += parseInt(e.target.name)));
});

two.addEventListener("click", function (e) {
  out.setAttribute("value", (previousValue += parseInt(e.target.name)));
});

three.addEventListener("click", function (e) {
  out.setAttribute("value", (previousValue += parseInt(e.target.name)));
});
four.addEventListener("click", function (e) {
  out.setAttribute("value", (previousValue += parseInt(e.target.name)));
});
five.addEventListener("click", function (e) {
  out.setAttribute("value", (previousValue += parseInt(e.target.name)));
});
six.addEventListener("click", function (e) {
  out.setAttribute("value", (previousValue += parseInt(e.target.name)));
});

// clearbutton
const clearbutton = document.getElementById("clear");
clearbutton.addEventListener("click", function (e) {
  out.setAttribute("value", "");
  previousValue = "";
});

add.addEventListener("click", function (e) {
  if (
    previousValue.includes("+") &&
    previousValue[previousValue.length - 1] !== "+"
  ) {
    let [operandA, operandB] = previousValue.split("+");
    const res = calulateResult(operandA, operandB, "+");
    out.setAttribute("value", parseInt(res));
    previousValue = res;
    out.setAttribute("value", (previousValue += "+"));
  } else {
    if (previousValue[previousValue.length - 1] !== "+") {
      out.setAttribute("value", (previousValue += "+"));
    }
  }
});

mul.addEventListener("click", function (e) {
    if (
        previousValue.includes("*") &&
        previousValue[previousValue.length - 1] !== "*"
      ) {
        let [operandA, operandB] = previousValue.split("*");
        const res = calulateResult(operandA, operandB, "*");
        out.setAttribute("value", parseInt(res));
        previousValue = res;
        out.setAttribute("value", (previousValue += "*"));
      } else {
        if (previousValue[previousValue.length - 1] !== "*") {
          out.setAttribute("value", (previousValue += "*"));
        }
      }
});

sub.addEventListener("click", function (e) {
  out.setAttribute("value", (previousValue += "-"));
});

divide.addEventListener("click", function (e) {
  out.setAttribute("value", (previousValue += "/"));
});

equal.addEventListener("click", function (e) {});
