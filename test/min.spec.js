let assert = require('assert')
let min = require('../src/min')

describe('min', function(){
    it('min num, argument number array', function(){
        assert.equal(min([1,2,3]), 1)
    })
    it('min num, arguments length > 1', function(){
        assert.equal(min(1,2,3), 1)
    })
    it('if no arg, Infinity', function(){
        assert.equal(min(), Infinity)
    })
    it('if has not number, NaN', function(){
        assert.equal(isNaN(min([1,2,'abc'])), true)
    })
})