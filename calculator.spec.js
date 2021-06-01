let operate = require('./calculator')

describe('calculator', function () {


   it('adds 2 numbers', function () {
      expect(operate('add', 4, 8)).toEqual(12);
   });
   it('subtract 2 numbers', function () {
      expect(operate('subtract', 4, 8)).toEqual(-4);
   });
   it('divide 2 numbers', function () {
      expect(operate('divide', 4, 8)).toEqual(0.5);
   });
   it('multiply 2 numbers', function () {
      expect(operate('multiply', 4, 8)).toEqual(32);
   });

});
