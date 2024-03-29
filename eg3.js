let x = 23;
let y=0;
for(let i=2; i<x-1; i++){
    if(x%i===0){
        y = y+1;
    }
}

if(y===0){
    console.log("prime Number");
} else{
    console.log("Not a Prime Number");
}