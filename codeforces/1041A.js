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
        arr.sort(function sortNumber(a, b) {
            return a - b;
        })
        let cnt = 0
        for (let i = 0; i < arr.length - 1; i++) {
            if ((arr[i] + 1) !== arr[i+1]) {
                cnt+=arr[i+1]-arr[i]
                cnt--
            }
        }
        console.log(cnt)
        return 0;
    }
})
