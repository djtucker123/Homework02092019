const expect = require('chai').expect;
const subtract = require('../subtract');


describe('subtract() method', function() {
    it('should return the difference of two numbers', function() {
        expect(subtract(6, 4)).to.equal(2);
    });
    it('should handle strings that are coeraceable', function() {
        expect(subtract(9, '5')).to.equal(4);
    });
    it('should return undefined when non-number encountered', function() {
        expect(subtract(2, 'cow')).to.equal(undefined);
    });
});