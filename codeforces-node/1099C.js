const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let k= 0
let n =0
let s=[]
let l=0
function count(st,i) {
    let c=0;
    for(;i<st.length;i++){
        if(s[i]!=='*' && s[i]!== '?'){
            c++
        }
    }
    return c
}
rl.on('line', (input) => {
    if (l === 0) { 
        s = input.split("")
    } else {
        rl.close();
        let k =parseInt(input)
        let cc=0
        let sw=0
        let s2=""
        for(let i=0;i<s.length;i++){
            if(s[i]==='?')
               cc++
            else if(s[i]==='*')
               sw++   
            else {
                s2+=s[i]
            }   
        }
        let sz=s.length-(cc+sw)
        let res=''
        let cc2=0
        let sw2=0
        for(let i=0,j=0;i<s.length;i++){
            let rest=s.length-(i+2)-((cc+sw)-(cc2+1))
            if(i+1<s.length&&s[i+1]==='?' && j<k && k>=rest+2){
               res+=s[i]
               j++
              cc2++
           } else if(i+1<s.length&&s[i+1]==='*'&&j<k){
               let st = j===0 ? 0 : j
             for(let h=0;h<k-st-(rest-((cc+sw)-(cc2+1)));h++){
               res+=s[i]
               j++
             }
             j=k
             cc2++
        } else if(i+1<s.length&&s[i]!=='?'&&s[i]!=='*'&&s[i+1]!=='?'&&s[i+1]!=='*'){
            res+=s[i]
            j++
        } else if(i===s.length-1) {
            res+=s[i]
        }
    }
    console.log(res)
    if(res.length!==k){
        console.log("Impossible")
        return 
    }
    console.log(res)
    return
}
    l++
})