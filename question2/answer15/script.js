
let num=[];
let count = 0;

for(let i=1; i<11; i++){  
        
    num.push(i)

    let l = num.length
    
    if(l % 3 == 0){
        console.log(...num)
        num=[]
    }   
}
console.log(...num)

// 1 2 3 
// 4 5 6
// 7 8 9
// 10