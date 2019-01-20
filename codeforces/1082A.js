const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let l = 0;
let n = 0

rl.on('line', (input) => {
    if (l === 0) {
        n = parseInt(input)
    } else {
        if (l === n)
            rl.close();

        let arr = input.split(" ").map(x => parseInt(x))
        let max = 999999999999
        let ans1 = max
        let ans2 = max
        let ans3 = max
        if (Math.abs(arr[2] - arr[1]) % arr[3] === 0) {
            ans1 = Math.round(Math.abs(arr[2] - arr[1]) / arr[3])
        }
        if (Math.abs(arr[2] - 1) % arr[3] === 0) {
            let rest1 = Math.abs(arr[2] - 1) / arr[3]
            let rest2 = Math.abs(arr[1] - 1) / arr[3]
            ans2 = Math.round(rest1) + Math.ceil(rest2)

        }
        if (Math.abs(arr[0] - arr[2]) % arr[3] === 0) {
            let rest1 = Math.abs(arr[1] - arr[0]) / arr[3]
            let rest2 = Math.abs(arr[0] - arr[2]) / arr[3]
            ans3 = Math.ceil(rest1) + Math.round(rest2)
        }
        let mn = Math.min(ans1, Math.min(ans2, ans3))
        console.log(mn === max ? -1 : mn)
    }
    l++
});
