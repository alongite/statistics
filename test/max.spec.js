let assert = require('assert')
let max = require('../src/max')

describe('max', function(){
    it('max num, argument number array', function(){
        assert.equal(max([1,2,3]), 3)
    })
    it('max num, arguments length > 1', function(){
        assert.equal(max(1,2,3), 3)
    })
    it('if no arg, -Infinity', function(){
        assert.equal(max(), -Infinity)
    })
    it('if has not number, NaN', function(){
        assert.equal(isNaN(max([1,2,'abc'])), true)
    })
})