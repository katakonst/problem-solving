const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let l = 0;
let t = 0
rl.on('line', (input) => {
    if (l === t + 1) {
        return 0
    }
    if (l === 0) {
        t = parseInt(input)
    } else {
        let s = input.split('')
        s.sort()
        if (s[0] !== s[s.length - 1]) {
            console.log(s.join(""))
        } else {
            console.log(-1)
        }
    }
    l++
});
