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
        let arr = input.split(" ").map(x => parseInt(x))
        let sum = 0
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]*2*(2*(Math.max((i+1),1)-1))
        }

        console.log(sum)
        return 0;
    }
})
