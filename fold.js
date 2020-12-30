//

var xs = [1,2,3]; // [2,3,4];

function addOne(xs){
   let xs = [];
   for (let num of xs){
     xs.push(num+1);
   };
   return xs;
 }

addOne(xs); // 2


function sum(xs) { 
}

// sum([1,2,3]) == 6;
// sum([1,2,3,4]) == 10;
// sum([]) == 0;


function sum(xs){
   let s = 0;
   for (let num of xs){
     s += num;
   };
   return s;
 }



function fold(xs,init,func) {
        
    let accum = init;
    for (let x of xs){
        accum = func(accum, x);
    }
    return accum;
}

let addOne = xs =>fold(xs,[],(accum,x) => { accum.push(x + 1); return accum; })

let sum = xs => fold(xs,0,(accum,x) => { accum += x; return accum; })


console.log(addOne([1,2,3]))
console.log(sum([1,2,3]))