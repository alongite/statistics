function mode(nums){
    let mapcount = {}
    let max = 0;
    for (let n of nums) {
        if(n === undefined) continue
        mapcount[n] = (mapcount[n] || 0) + 1
        max = Math.max(mapcount[n], max)
    }
    let ret = [];
    let keys = Object.keys(mapcount)
    keys.forEach((key) => {
        let count = mapcount[key];
        if (count === max) {
            let num = Number(key);
            ret.push({
                name: isNaN(num) ? key : num,
                count: count
            })
        }
    })
    return ret
}

module.exports = mode
