
var sumfun=(arr)=>{
    let sum=0;
    for(let i in arr)
    sum+=arr[i];
    console.log(sum);
}
sumfun([10,20,30]);

var sumfun=(...arr)=>{
    let sum=0;
    for(let i in arr)
    sum+=arr[i];
    console.log(sum);
}
sumfun();
sumfun(10,20);
sumfun(10,20,30);

fun=function(a,b,...args){
    console.log("a",a);
    console.log("b",b);
    console.log(args);
}
fun(1,2,"hello",900);
fun(1);
fun(1,2);

function sumNumbers(...args){
    return args.filter(n=>typeof n === 'number')
    .reduce((previous,current)=>previous+current);
}
console.log(sumNumbers(30,null,40,undefined,60,'30abc'));
console.log(sumNumbers(30,null,40,undefined,60,parseInt('30abc')));