const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let l = 0;
let n = 0

rl.on('line', (input) => {
    if (l === 0) {
        n = parseInt(input)
    } else {
        if (l === n)
            rl.close();

        let nr = parseInt(input)
        let i = 7
        let c = 0
        while (nr != 0) {
            if (nr - i < 0)
                i--
            else {
                nr = nr - i
                c++
            }
        }
        console.log(c)

    }
    l++
});
