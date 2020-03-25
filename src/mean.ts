// import { add } from 'mathjs';

enum numberType {
    number = 'number',
    bigNumber = 'bigNumber'
}
interface options {
    number?: numberType
}

function mean(nums: Array<number>, opts?: options){
    if(opts && opts.number === numberType.bigNumber){
        
    } else {
        return new Promise((reslove: Function, reject: Function) => {
            let page: number = 10000;
            let n: number = 0;

            let s = n++ * page;
            let e = n * page;
            let ret = _sum(nums, s, e);
        });
    }
    
}

function _sum(nums: Array<number>, start: number, end: number){
    let ret: number = 0;
    for(let i: number = start; i < end; i++){
        ret += nums[i];
    }

    return ret;
}

export default mean;