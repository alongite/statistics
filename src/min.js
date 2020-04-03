function min(nums){
    if (arguments.length === 0) {
        return Infinity;
    } else if (arguments.length > 1) {
        return Math.min(...arguments)
    }
    return Math.min(...nums)
}

module.exports = min
