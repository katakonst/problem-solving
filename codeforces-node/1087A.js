const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let l = 0;
rl.on('line', (input) => {
    rl.close();
    let inp = input.split("")
    let res = ""
    if (inp.length >= 2 && inp.length % 2 === 1) {
        res += inp[Math.floor((inp.length / 2))]
    } else if (inp.length >= 2 && inp.length % 2 === 0) {
        res += inp[Math.floor((inp.length / 2) - 1)]
    }
    let ln = inp.length % 2 === 1 ? inp.length / 2 : inp.length / 2
    ln = Math.floor(ln)
    let inc = inp.length % 2 === 1 ? 0 : 1
    for (let i = 1; i < ln; i++) {
        res += inp[ln + i - inc]
        res += inp[ln - i - inc]
    }
    res += inp[inp.length - 1]
    if (inp.length > 1 && inp.length % 2 == 1) {
        res += inp[0]
    }
    console.log(res)
    return 0;
});