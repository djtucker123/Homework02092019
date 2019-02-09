const expect = require('chai').expect;
const mult = require('../multiply');


describe('multiply() method', function() {
    it('should return the product of two numbers', function() {
        expect(mult(2, 4)).to.equal(8);
    });
    it('should handle strings that are coeraceable', function() {
        expect(mult(2, '5')).to.equal(10);
    });
    it('should return undefined when non-number encountered', function() {
        expect(mult(2, 'cow')).to.equal(undefined);
    });
});