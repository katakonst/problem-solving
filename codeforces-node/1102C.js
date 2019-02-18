const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let l = 0;
let x =0
let y= 0
let n =0
rl.on('line', (input) => {
    if (l === 0) { 
        let arr = input.split(" ").map(x=>parseInt(x))
        x = arr[1]
        y = arr[2]  
    } else {
        rl.close();
        let arr = input.split(" ").map(p=>parseInt(p))
        if(x>y){
          console.log(arr.length)
           return
        }
        let c=0
        for(let i=0;i<arr.length;i++){
        if(arr[i]<=x){
            c++;
        }
        }
        console.log(Math.ceil(c/2)+"")
        return
    }
    l++
})
