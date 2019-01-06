const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let l = 0;
rl.on('line', (input) => {
    if (l === 0) { l++ }
    else {
        rl.close();
        let max = 1
        let arr = input.split('')
        let curr=0
        let res=''
        let isRem = false
        for (let i = 0; i < arr.length-1;i++) {
             if(arr[i]>arr[i+1]&&!isRem){
                isRem= true
             } else {
                 res+=arr[i]
             }
        }
        res+=arr[arr.length-1]
        if(arr.length===res.length)
        {
            res=res.slice(0,res.length-1)
        }
        console.log(res)
        return 0;
    }
});
