let n = 123;
console.log(add(n));

function add(n) {
    let sum = 0;
    n = n.toString();

    for(var i=0;i<n.length;i++){
        
        sum+=Number(n[i])
    }
    return sum;
}

//6