const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let l = 0;
let n= 0
let k=0
rl.on('line', (input) => {
    if (l === 0) {
        let arr = input.split(" ").map(x => parseInt(x))
        n=arr[0]
        k=arr[1]
    } else {
        rl.close();
        let arr = input.split(" ").map(x => parseInt(x))
        let social =0
        let tst=0
        for (let i = 0; i < 100; i++) {
            if(arr[i]===1){
                tst++
            } else {
                social++
            }
        }

        console.log(sum)
        return 0;
    }
    l++
})
