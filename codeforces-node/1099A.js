const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let l = 0;
let w = []
let h = []

rl.on('line', (input) => {
    if (l === 0) {
        let inp = input.split(" ").map(x => parseInt(x))
        w.push(inp[0])
        h.push(inp[1])
    } else if (l === 1) {
        let inp = input.split(" ").map(x => parseInt(x))
        w.push(inp[0])
        h.push(inp[1])
    } else {
        rl.close();
        let inp = input.split(" ").map(x => parseInt(x))
        let wg = w[0]
        let hg = h[0]
        w.push(inp[0])
        h.push(inp[1])
        if (h[1] < h[2]) {
            let aux = h[1]
            h[1] = h[2]
            h[2] = aux
            aux = w[1]
            w[1] = w[2]
            w[2] = aux
        }
        for (let i = h[0]; i >= h[1]; i--) {
            wg += i
            hg--
        }

        wg -= w[1]
        if (wg < 0)
            wg = 0
        if (hg <= 0) {
            console.log(wg)
            return
        }
        for (let i = h[1] - 1; i >= h[2]; i--) {
            wg += i
            hg--
        }
        wg -= w[2]
        if (wg < 0)
            wg = 0
        for (let i = hg; i >= 0; i--) {
            wg += i;
        }
        console.log(wg)
    }
    l++
});
