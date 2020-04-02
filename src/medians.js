const { add, bignumber } = require('mathjs')

function medians (nums) {
    const len = nums.length
    const odd = !(len % 2)
    const middle = odd ? len / 2 : Math.ceil(len / 2)

    if (odd) {
        const n1 = selectNBig(nums, middle + 1)
        const n2 = selectNBig(nums, middle)
        return add(bignumber(n1), bignumber(n2)) / 2
    } else {
        return selectNBig(nums, middle)
    }
}

function selectNBig (arr, n) {
    const left = []
    const right = []
    const flag = arr[0]
    for (let i = 1; i < arr.length; i++) {
        let num = arr[i]
        if (isNaN(num)) {
            num = 0
        }
        num > flag ? right.push(num) : left.push(num)
    }
    if (left.length + 1 === n) {
        return flag
    } else if (left.length >= n) {
        return selectNBig(left, n)
    } else {
        return selectNBig(right, n - left.length - 1)
    }
}

module.exports = medians
