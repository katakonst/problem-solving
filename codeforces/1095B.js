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
        input = input.split(" ")
        let min1 = 100001
        let min2 = 100001
        let max1 = 0
        let max2 = 0
        for (let i = 0; i < input.length; i++) {
            let l = parseInt(input[i])
            if (l < min1) {
                min2 = min1
                min1 = l;
            } else if (l < min2) {
                min2 = l
            }

            if (l > max1) {
                max2 = max1
                max1 = l;
            } else if (l > max2) {
                max2 = l
            }
        }
        let sol = []
        sol[0] = max1 - min2
        sol[1] = max2 - min1
        if (sol[0] < sol[1]) {
            console.log(sol[0])
            return 0
        }
        console.log(sol[1])
        return 0;
    }
});
