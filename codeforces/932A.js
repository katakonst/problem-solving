const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let l = 0;
rl.on('line', (input) => {
        rl.close();
        let inp = input.split(" ").map(x => parseInt(x))
        let  res = Math.ceil((inp[0]*8)/inp[1]) + Math.ceil((inp[0]*5)/inp[1]) + Math.ceil((inp[0]*2)/inp[1])
        console.log(res)
        return 0;
});
