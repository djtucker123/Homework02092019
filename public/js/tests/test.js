
// const expect = require('chai').expect;
// const add = require('../add');
// const subtract = require('../subtract');
// const multip = require('../multiply');


// describe('add() method', function() {
//     it('should return the sum of two numbers', function() {
//         expect(add(2, 4)).to.equal(6);
//     });
//     it('should handle strings that are coeraceable', function() {
//         expect(add(2, '5')).to.equal(7);
//     });
//     it('should return undefined when non-number encountered', function() {
//         expect(add(2, 'cow')).to.equal(undefined);
//     });
// });



// describe('subtract() method', function() {
//     it('should return the difference of two numbers', function() {
//         expect(subtract(6, 4)).to.equal(2);
//     });
//     it('should handle strings that are coeraceable', function() {
//         expect(subtract(9, '5')).to.equal(4);
//     });
//     it('should return undefined when non-number encountered', function() {
//         expect(subtract(2, 'cow')).to.equal(undefined);
//     });
// });



describe('multiply() method', function() {
    it('should return the product of two numbers', function() {
        expect(multiply(2, 4)).to.equal(8);
    });
    it('should handle strings that are coeraceable', function() {
        expect(multiply(2, '5')).to.equal(10);
    });
    it('should return undefined when non-number encountered', function() {
        expect(multiply(2, 'cow')).to.equal(undefined);
    });
});








// //Unit Tests
// describe('addValue', function() {
//     it('should return the sum of two whole numbers', function() {
//       expect(addValue(2, 4)).to.equal(6);
//     });
  
//     it('should return the sum of two decimal numbers', function() {
//       expect(addValue(2.5, 1.5)).to.equal(4);
//     });
  
//     it('should return the sum of a decimal number and a string that is coercible to a number', function() {
//       expect(addValue(2.5, '1.5')).to.equal(4);
//     });
  
//     it('should return the original total for invalid inputs', function() {
//       expect(addValue(4, 'cow')).to.equal(4);
//     });
//   });
  
//   //Functional Tests
//   describe('price click', function () {
  
//     beforeEach(function () {
//       total = 0;
//     });
  
//     it('should add a price on click', function () {
  
//       $('#plate-btn').trigger('click');
//       expect($('#total').text()).to.equal('1.72');
//     });
  
//     it('should add 2 prices on 2 clicks', function () {
  
//       $('#plate-btn').trigger('click');
//       $('#cup-btn').trigger('click');
//       expect($('#total').text()).to.equal('3.71');
//     });
  
//   });
// //describe.......................



// // psudocode for potential tests

// if cost is zero should abort the transactions (alert grocery management)
// if grocery product ID entry is not integer then abort the transactions (alert customer)
// if grocery product ID entry is not Positive then abort the transactions (alert customer)
// if quantity entry is not integer then abourt the transactions (alert customer)
// if quantity entry is not positive then abourt the transactions
// if quantity is not coerceable to integer 
// if grocery product ID entgry is not coerceable to integer
// if product ID entry does not exist in database - alert please try new
// if submit button is working?? 
// test placeorder by reducing inventory by 1, then adding 1 (adding is not exisitng function so add it or spoof the transaction completely)
// negative test -- confirm placeorder does not generate negative balance in IDBOpenDBRequest
// retreive inventory test -- spoof the array of data to act on? retreive, server update if DB not avail??)




// need to understand refactor option if stuff like entry fields are DH_UNABLE_TO_CHECK_GENERATOR.toExponentialor 

// or add stuff like multiply as a function to calculate cost and then test that -- not super, need TA viewpoint
//or subtract function to manage inventory process -- change it into function? and call it?