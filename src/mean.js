const math = require('mathjs')

function mean (nums) {
    let sum = 0
    sum = nums.reduce((sum, n) => {
        return math.add(sum, isNaN(n) ? 0 : math.bignumber(n))
    })
    return sum / nums.length
}

module.exports = mean
