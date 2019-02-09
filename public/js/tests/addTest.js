const expect = require('chai').expect;
const add = require('../add');


describe('add() method', function() {
    it('should return the sum of two numbers', function() {
        expect(add(2, 4)).to.equal(6);
    });
    it('should handle strings that are coeraceable', function() {
        expect(add(2, '5')).to.equal(7);
    });
    it('should return undefined when non-number encountered', function() {
        expect(add(2, 'cow')).to.equal(undefined);
    });
});