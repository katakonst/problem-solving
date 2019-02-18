const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let l = 0;
let op = []
let array = []

rl.on('line', (input) => {
    if (l === 0) {
        op = input.split(' ').map(function (item) {
            return parseInt(item, 10);
        });
    } else if (l === 1) {
        rl.close();

        array = input.split(' ').map(function (item) {
            return parseInt(item, 10);
        });

        array.sort(function sortNumber(a, b) {
            return a - b;
        })
        let mn = array[0]
        console.log(mn)
        let amm=mn;
        let st=0
        let res=''
        for (let i = 0; i < op[1] - 1; i++) {
            let min = mn
            if (mn > 0) {
                mn = -1
                for (let j = st; j < array.length&&mn==-1; j++) {
                    array[j] -= amm;
                    if (array[j] > 0 && mn === -1) {
                        mn = array[j]
                        amm+=mn
                        res+=mn+'\n'
                    } else if(mn==-1){
                        st++
                    }
                }
            }
            if (mn === -1) {
                res+='0'+'\n'
            }
        }
        console.log(res)
    }
    l++
});
