const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let l = 0;
let hand = []
rl.on('line', (input) => {
        rl.close();
        let n = parseInt(input)
        if((n-2)%3===0)
         console.log(1,2,n-3) 
        else
         console.log(1,1,n-2) 
    return
})
