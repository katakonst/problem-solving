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

        arr = input.split(' ').map(function (item) {
            return parseInt(item, 10);
        });

        if(arr[0]>arr[2]){
          console.log(arr[2])
        } else if(arr[1]<arr[2]){
            console.log(arr[2])
        } else {
            console.log(Math.ceil((arr[1]+1)/arr[2])*arr[2])
        }

        if (l === n)
            return

    }
    l++
});
