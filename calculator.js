const operate = function (operator, x, y) {

   if (parseFloat(x) && parseFloat(y)) {
      // console.log("x: " + x);
      // console.log("y: " + y);
      x = parseFloat(x);
      y = parseFloat(y);
      // console.log("x: " + x);
      // console.log("y: " + y);
      // console.log(operator);
      switch (operator) {
         case 'add':
         case '+':
            return x + y;
            break;
         case 'subtract':
         case '-':
            return x - y;
            break;
         case 'multiply':
         case '*':
            return x * y;
            break;
         case 'divide':
         case '/':
            return x / y;
            break;
      }
   }
   else {
      return DIVISION_BY_ZERO_MESSAGE;
   }


};
const INITIAL_VALUE = null;
const INITIAL_DISPLAY_VALUE = "0";
const DIVISION_BY_ZERO_MESSAGE = "Dividing by ZERO?? Not today you don't!";
let displayValue;// = INITIAL_VALUE;
let firstOperand;
let secondOperand;
let buildNextOperand;
let currentOperator;
let hasCurrentDecimalPoint;

const result = document.getElementById("result");
const buttons = document.querySelectorAll("button");

initializeValues();


for (const button of buttons) {

   button.addEventListener('click', function (event) {
      // console.log(button.id);
      // check to see if the button pushed is an operation button or a number

      // console.log(isNumber(button));
      if (isNumber(button)) { // Is this a number?
         if (result.value === "0" || result.Value === DIVISION_BY_ZERO_MESSAGE || buildNextOperand) {
            result.value = "";
            buildNextOperand = false;
         }
         displayValue = result.value + button.id;
         result.value = displayValue.toString();

      }
      else if (isClear(button)) {
         initializeValues();
      }
      else if (isDecimalPoint(button)) {
         insertDecimalPoint();
      }
      else if (isOperator(button)) {
         if (currentOperator !== null) {
            calculate();
         }
         firstOperand = result.value;
         currentOperator = button.id;
         buildNextOperand = true;
      }

      else if (isEquals(button)) {
         if (currentOperator !== null) {
            calculate();
         }
         firstOperand = result.value;
         buildNextOperand = true;
      }
      this.blur(); // remove focus from button
   })
};


document.addEventListener('keydown', function (event) {

   // check to see if the key entered is an operation key or a number
   keyEntered = event.key;

   if (isKeyboardNumber(keyEntered)) { // Is this a number?
      if (result.value === "0" || result.Value === DIVISION_BY_ZERO_MESSAGE || buildNextOperand) {
         result.value = "";
         buildNextOperand = false;
      }
      displayValue = result.value + keyEntered;
      result.value = displayValue.toString();

   }
   else if (isKeyboardClear(keyEntered)) {
      initializeValues();
   }
   else if (isKeyboardDecimalPoint(keyEntered)) {
      insertDecimalPoint();
   }
   else if (isKeyboardOperator(keyEntered)) {
      if (currentOperator !== null) {
         calculate();
      }
      firstOperand = result.value;
      currentOperator = keyEntered;
      buildNextOperand = true;
   }
   else if (isKeyboardEquals(keyEntered)) {
      if (currentOperator !== null) {
         calculate();
      }
      firstOperand = result.value;
      buildNextOperand = true;
   }

});

function calculate() {
   if (currentOperator === null || buildNextOperand) {
      return;
   }
   else {

      secondOperand = result.value;
      result.value = operate(currentOperator, firstOperand, secondOperand);
      currentOperator = null;
      hasCurrentDecimalPoint = false;
   }
}

function isNumber(button) {
   // console.log("isNumber function");
   return (!isNaN(button.id));
};
function isClear(button) {
   // console.log("isClear function");
   return (button.id === "clear");
};
function isOperator(button) {
   // console.log("isOperator function");

   //console.log(button.classList.contains("operator"));
   return (button.classList.contains("operator"));
};
function isEquals(button) {
   // console.log(button.classList.contains("equals"));
   return (button.classList.contains("equals"));
};
function isDecimalPoint(button) {
   // console.log(button.classList.contains("decimal"));
   return (button.classList.contains("decimal"));
};
function isKeyboardNumber(keyEntered) {
   // console.log(keyEntered);
   return (!isNaN(keyEntered));
};
function isKeyboardClear(keyEntered) {
   // console.log(keyEntered);
   return (keyEntered === "Escape");
};
function isKeyboardOperator(keyEntered) {
   // console.log(keyEntered);

   return (keyEntered === "+" ||
      keyEntered === "-" ||
      keyEntered === "*" ||
      keyEntered === "/");
};
function isKeyboardEquals(keyEntered) {
   // console.log(keyEntered);
   return (keyEntered === "=" || keyEntered === "Enter");
};
function isKeyboardDecimalPoint(keyEntered) {
   // console.log(keyEntered);
   return (keyEntered === ".");
};
function initializeValues() {
   displayValue = INITIAL_DISPLAY_VALUE;
   storedValue = INITIAL_VALUE;
   firstOperand = INITIAL_DISPLAY_VALUE;
   secondOperand = INITIAL_VALUE;
   resultValue = INITIAL_DISPLAY_VALUE;
   priorButton = INITIAL_VALUE;
   result.value = INITIAL_DISPLAY_VALUE;
   firstOperandComplete = false;
   secondOperandComplete = false;
   currentOperator = INITIAL_VALUE;
   buildNextOperand = false;
   hasCurrentDecimalPoint = false;
};
function sendValuesToConsole() {
   console.log("displayValue: " + displayValue);
   console.log("storedValue: " + storedValue);
   console.log("firstOperand: " + firstOperand);
   console.log("secondOperand: " + secondOperand);
   console.log("resultValue: " + resultValue);
   console.log("priorButton: " + priorButton);
   console.log("result.value: " + result.value);
   console.log("firstOperandComplete: " + firstOperandComplete);
   console.log("secondOperandComplete: " + secondOperandComplete);
   console.log("currentOperator: " + currentOperator);
   console.log("buildNextOperand: " + buildNextOperand);
   console.log("hasCurrentDecimalPoint: " + hasCurrentDecimalPoint);
};
function insertDecimalPoint() {
   if (!hasCurrentDecimalPoint) {
      result.value = result.value + ".";
      hasCurrentDecimalPoint = true;
   }
}

module.exports = operate;