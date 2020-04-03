function max(nums){
    if (arguments.length === 0) {
        return -Infinity
    } else if (arguments.length > 1) {
        return Math.max(...arguments)
    }
    return Math.max(...nums)
}

module.exports = max
