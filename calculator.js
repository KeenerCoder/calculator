const operate = function (operator, x, y) {

   if (parseFloat(x) && parseFloat(y)) {
      x = parseFloat(x);
      y = parseFloat(y);
      switch (operator) {
         case 'add':
            return x + y;
            break;
         case 'subtract':
            return x - y;
            break;
         case 'multiply':
            return x * y;
            break;
         case 'divide':
            return x / y;
            break;
      }
   }
   else {
      return "ERROR!";
   }


};
const INITIAL_VALUE = null;
const INITIAL_DISPLAY_VALUE = "0";
let displayValue;// = INITIAL_VALUE;
let firstOperand;
let secondOperand;
let buildNextOperand;
let currentOperator;

const result = document.getElementById("result");
const buttons = document.querySelectorAll("button");
initializeValues();


for (const button of buttons) {
   button.addEventListener('click', function (event) {
      // console.log(button.id);
      // check to see if the button pushed is an operation button or a number

      // console.log(isNumber(button));
      if (isNumber(button)) { // Is this a number?
         if (result.value === "0" || buildNextOperand) {
            result.value = "";
            buildNextOperand = false;
         }
         displayValue = result.value + button.id;
         result.value = displayValue.toString();

      }
      else if (isClear(button)) {
         initializeValues();
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
         calculate();
      }

   })
};
function calculate() {
   if (currentOperator === null || buildNextOperand) {
      return;
   }
   else {

      secondOperand = result.value;
      result.value = operate(currentOperator, firstOperand, secondOperand);
      currentOperator = null;
   }
}
// for (const button of buttons) {
//    button.addEventListener('click', function (event) {
//       // console.log(button.id);
//       // check to see if the button pushed is an operation button or a number

//       // console.log(isNumber(button));
//       if (isNumber(button)) { // Is this a number?
//          if (result.value === "0") {
//             displayValue = button.id;
//             result.value = displayValue.toString();
//             // firstOperand = result.value;
//          }
//          else {
//             // if the previous button was a number, then keep building the number
//             // console.log(priorButton + "-before");
//             // console.log(priorButton.id + "        before");
//             if (isNumber(priorButton)) {
//                // console.log(priorButton + "-after");
//                // console.log(priorButton.id + "      after");

//                displayValue = result.value + button.id;
//                result.value = displayValue.toString();
//             }
//             else { // otherwise set the number to be built and assign to correct operand
//                if (firstOperand === null) {
//                   firstOperand = result.value;
//                   firstOperandComplete = true;
//                }
//                else {
//                   secondOperand = result.value;
//                   // secondOperandComplete = true;
//                }

//             }
//          }
//          // console.log("We be a number");
//       }
//       else if (isClear(button)) {
//          initializeValues();
//       }
//       else if (isOperator(button)) {
//          currentOperator = button.id;
//          // console.log(currentOperator);
//          // console.log(firstOperand);
//          // console.log(secondOperand);
//          // console.log(resultValue);
//          // console.log("storedValue: " + storedValue);
//          // console.log("displayValue before: " + displayValue);

//          if (firstOperand === null) {
//             firstOperand = result.value;
//          }
//          else {
//             firstOperandComplete = true;
//          }

//          if (firstOperandComplete === true) {
//             secondOperand = result.value;
//             resultValue = operate(button.id, firstOperand, secondOperand);
//             displayValue = operate(button.id, firstOperand, secondOperand);
//             firstOperandComplete = true;
//          }
//          else {
//             firstOperand = result.value;
//             firstOperandComplete = true;
//          }
//          // console.log(firstOperand);
//          // console.log(secondOperand);
//          // console.log(resultValue);
//          // console.log("displayValue after: " + displayValue);
//          result.value = displayValue;

//       };
//       // set prior button

//       setPriorButton(button);


//    })
// };

function isNumber(button) {
   // console.log("isNumber function");
   return !isNaN(button.id);
};
function isClear(button) {
   // console.log("isClear function");
   return (button.id === "clear");
};
function isOperator(button) {
   // console.log("isOperator function");

   console.log(button.classList.contains("operator"));
   return (button.classList.contains("operator"));
};
function isEquals(button) {
   console.log(button.classList.contains("equals"));
   return (button.classList.contains("equals"));
}
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
};


module.exports = operate;