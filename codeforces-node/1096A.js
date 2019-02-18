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
        console.log(arr[0], arr[0] * 2)

        if (l === n)
            return
    }
    l++
});
