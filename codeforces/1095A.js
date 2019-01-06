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
        let res = ""
        for (let i = 0, c = 0; i < input.length; c++ , i += c) {
            res += input.charAt(i);
        }
        console.log(res)
        return 0;
    }
});
