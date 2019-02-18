const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let l = 0;
let cups = []
let medals = []

rl.on('line', (input) => {
    if (l === 0) {
        cups = input.split(' ').map(function (item) {
            return parseInt(item, 10);
        });
    } else if (l === 1) {
        medals = input.split(' ').map(function (item) {
            return parseInt(item, 10);
        });
    } else {
        function add(a, b) {
            return a + b;
        }
        rl.close();
        let shelfs = parseInt(input)
        var cupsSum = cups.reduce(add, 0);
        var medalsSum = medals.reduce(add, 0);
        shelfs-=Math.ceil(cupsSum/5)
        shelfs-=Math.ceil(medalsSum/10)
        if(shelfs>=0){
            console.log("YES")
            return 0
        }
        console.log("NO")

        return 0;
    }
    l++
});
