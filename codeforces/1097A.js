const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let l = 0;
let hand = []
rl.on('line', (input) => {
    if (l === 0) {
        hand = input.split("")
    }
    else {
        rl.close();
        let arr = input.split(" ").map(x => x.split(""))
        let can = false
        for (let i = 0; i < arr.length; i++) {
            if (hand[0] === arr[i][0] || hand[1] === arr[i][1]) {
                can = true
                break
            }
        }
        if (can)
            console.log('YES')
        else
            console.log('NO')
        return 0;
    }
    l++
})