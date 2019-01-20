const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let l = 0;
let t = 0
rl.on('line', (input) => {
    let s = input.split('')
    let c = 0
    let isAcc = 0
    let op = [-1, -1]
    let cl = [-1, -1]
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '[' && op[0] === -1) {
            op[0] = i
            isAcc++
        } else if (op[0] !== -1 && s[i] === ':' && op[1] === -1) {
            op[1] = i
            isAcc++
            break;
        } else {
            c++
        }
    }
    for (let i = s.length - 1; i > op[1]; i--) {
        if (s[i] === ']' && cl[1] === -1 && cl[0] === -1) {
            cl[1] = i
            isAcc++
        } else if (cl[1] !== -1 && s[i] === ':' && cl[0] === -1) {
            cl[0] = i
            isAcc++
            break;
        } else {
            c++
        }
    }
    for (let i = op[1] + 1; i < cl[0]; i++) {
        if (s[i] !== '|') {
            c++
        }
    }
    rl.close()
    if (isAcc !== 4) {
        console.log(-1)
    } else {
        console.log(s.length - c)
    }
});
