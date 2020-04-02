let assert = require('assert')
let mode = require('../src/mode')

describe('mode', function(){
    it('should return 2', function(){
        assert.deepStrictEqual(mode([1,2,3,2]), [{name: 2, count: 2}])
    })
    it('empty', function(){
        let arr = new Array(10)
        arr[0] = 1
        assert.deepStrictEqual(mode(arr), [{name: 1, count: 1}])
    })
    it('string', function(){
        let arr = ['a', 'a', 'a', 'b']
        assert.deepStrictEqual(mode(arr), [{name: 'a', count: 3}])
    })
})