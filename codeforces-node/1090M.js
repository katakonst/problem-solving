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
        let arr = input.split(' ')
        let curr=0
        for (let i = 0; i < arr.length;i++) {
             if(i>=1&&arr[i]===arr[i-1]){
                    if(curr>max){
                        max=curr
                    }
                    curr=0
             }
          curr++
        }
        if(curr>max){
            max=curr
        }
        console.log(max)
        return 0;
    }
});
