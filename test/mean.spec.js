let assert = require('assert');
let mean = require('../src/mean');

describe('mean', function() {
    it('should return 2', function() {
      assert.equal(mean([1,2,3]), 2);
    });
    it('isNaN as 0', function() {
      assert.equal(mean([3,'abc',3]), 2);
    });
    it('0.1, 0.2 return 0.15', function(){
      assert.equal(mean([0.1, 0.2]), 0.15)
    })
});