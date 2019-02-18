const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let l = 0;
rl.on('line', (input) => {
    if (l === 0) {} else {
        rl.close();
        let hm = {}
        let arr = input.split(" ").map(x=>parseInt(x))
        let mn1 = 9999999
        let nr = 0
        for(let i=1;i<=100;i++){
            let s=0
                for(let j=0;j<arr.length;j++){
                   s+=Math.min(Math.min(Math.abs(i-arr[j]), Math.abs(i-arr[j]-1)),Math.abs(i-arr[j]+1))
                }
                if(s<mn1){
                    mn1=s;
                    nr=i
                }
        }
        console.log(nr,mn1)
        return
    }
    l++
})
