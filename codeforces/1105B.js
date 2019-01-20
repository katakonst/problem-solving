const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let l = 0;
let x = 0
let k = 0
let n = 0
rl.on('line', (input) => {
    if (l === 0) {
        let arr = input.split(" ").map(x => parseInt(x))
        x = arr[0]
        k = arr[1]
    } else {
        rl.close();
        let hm = {}
        let arr = input.split("")
        let c = 0
        for (let i = 0; i < arr.length; i++) {
            let cnt = 1
            let st = i
            while (i + 1 < arr.length && arr[i] === arr[i + 1] && cnt < k) {
                cnt++
                i++
            }
            if (hm[arr[i]] && cnt === k) {
                hm[arr[i]]++
            } else if (cnt === k) {
                hm[arr[i]] = 1
            }
        }

        let mn = 0
        for (let e in hm) {
            if (mn < hm[e]) {
                mn = hm[e]
            }
        }
        console.log(mn)
        return
    }
    l++
})
