const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let l = 0;
let k, s = 0
rl.on('line', (input) => {
    arr = input.split(" ").map(x => parseInt(x))
    n = arr[0]
    k = arr[1]
    rl.close();

    for (let i = k - 1; i >= 0; i--) {
        if (n % i === 0) {
            let c = n / i
            console.log(c * k + i)
            return
        }
    }
})