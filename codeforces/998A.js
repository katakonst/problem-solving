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
        let arrPos = []
        let min = 9999999
        let pos = 0
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]
            if (min > arr[i]) {
                min = arr[i]
                pos = i
            }
        }
        if (sum - min !== min && sum - min !== 0) {
            console.log("1")
            console.log(pos + 1)
            return
        }


        console.log("-1")
        return 0;
    }
});
