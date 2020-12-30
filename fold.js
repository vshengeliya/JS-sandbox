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