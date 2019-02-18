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
        let arr = input.split(" ").map(x => parseInt(x))
        let cnt = 0
        let max = 0
        for (let i = 1; i < arr.length; i++) {
            if (arr[i]===arr[i-1]+1) {
                cnt++
                if(i===1 && arr[i-1]===1){
                    cnt++
                }
                if(i+1<arr.length&&arr[i]+1!==arr[i+1]){
                    cnt--
                }
                if(i===arr.length-1 && arr[i]!==1000){
                    cnt--
                }
                if(cnt>max){
                    max=cnt
                }
            } else {
                cnt=0
            }
        }
        console.log(max)
        return 0;
    }
})
