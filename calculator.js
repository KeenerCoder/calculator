const calculator = function (operator, x, y) {

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

module.exports = calculator;