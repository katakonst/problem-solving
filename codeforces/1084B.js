const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let l = 0;
let k, s = 0
rl.on('line', (input) => {
    if (l === 0) {
        arr = input.split(" ").map(x => parseInt(x))
        k = arr[0]
        s = arr[1]
    }
    else {
        rl.close();
        let arr = input.split(" ").map(x => parseInt(x))
        var sum = arr.reduce((a, b) => a + b, 0);
        if (sum < s) {
            console.log("-1")
            return
        }
        let mn = 99999999999999999
        let eq = true
        for (let i = 0; i < arr.length; i++) {
            if (mn > arr[i]) {
                mn = arr[i]
            }
            if (i + 1 < arr.length && eq && arr[i + 1] !== arr[i]) {
                eq = false
            }
        }
        if (eq) {
            console.log(mn - Math.ceil((s / arr.length)))
            return 0;
        }

        for (let i = 0; i < arr.length; i++) {
            sf = s - ((arr[i] - mn))
            arr[i] = arr[i] - ((arr[i] - mn))
            s = sf
            if (s <= 0) {
                console.log(mn)
                return
            }
        }
        console.log(mn - Math.ceil((s / arr.length)))

        return 0;
    }
    l++
})