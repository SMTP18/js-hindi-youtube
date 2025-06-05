//video number 21

// let a = 10;
// const b1 = 20;
// var c = 300;

let  a=300; //global scope 

if(true){
//local scope    
let a = 10;
const b1 = 20;
// var c = 30;
console.log("INNER: " ,a);

}

console.log(a);
// console.log(b1);
// console.log(c);

 