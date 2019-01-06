const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let l = 0;
rl.on('line', (input) => {
    if (l == 0) { l++ }
    else {
        rl.close();
        let strArray = input.split(" ")
        let s = strArray.map(function (item) {
            return parseInt(item, 10);
        });
        s = s.sort(function sortNumber(a, b) {
            return a - b;
        })
        let res = 0;
        for (let i = 0; i < input.length; i += 2) {
            let d = s[i + 1] - s[i]
            if (d > 0) {
                res += d
            }
        }
        console.log(res)
        return 0;
    }
});
