const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let l = 0;
rl.on('line', (input) => {
        rl.close();
        let numbers = input.split(' ').map(x=>parseInt(x))
        console.log(Math.min(Math.min(numbers[0]+2,numbers[1]+1),numbers[2])*3-3)
});
