const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let l = 0;
rl.on('line', (input) => {
    rl.close();
    let inp = input.split(" ").map(x => parseInt(x))
    let ct = 0
    let s = inp[1]
    for (let i = inp[0]; i >= 0 && s > 0; i--) {
        ct += Math.floor(s / i)
        s = s - i * Math.floor(s / i)
    }
    console.log(ct)
    return 0;
});
