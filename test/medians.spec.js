let assert = require('assert');
let medians = require('../src/medians');

describe('medians', function() {
    it('should return 2', function() {
        assert.equal(medians([1,2,3]), 2);
    });
    it('sort 2.5', function() {
        assert.equal(medians([1,2,3,4]), 2.5);
    });
    it('unsort 5', function(){
        assert.equal(medians([8,3,4,6]), 5)
    })
    it('NaN 4', function(){
        assert.equal(medians([8,3,4,6,'abd']), 4)
    })
});