interface job {
    cb: Function,
    args: Array<any>,
    context: any
}

let jobs:Array<job> = [];
let timer = null;

function loop(){
    return setImmediate(() => {
        let st = new Date().getTime();
        while(jobs.length){
            let job:job = jobs.shift();
            job.cb.apply(job.context, job.args);
            if(new Date().getTime() - st > 1000){
                timer = loop();
                break;
            }
        }
    })
}

export function put(job:job){
    let pos = jobs.push(job);
    if(!timer){
        timer = loop();
    }
    return pos;
}
