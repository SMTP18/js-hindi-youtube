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
// console.log("INNER: " ,a);

}

// console.log(a);
// console.log(b1);
// console.log(c);

//********************************VIDEO NUmber 22******************/

function one(){
    const username="harry_negi"

    function two(){
        const website="youtube"
        // console.log(username);
    }

    // console.log(website);

    two();
}

// one();

if(true){
    const username="harry";
    if(username==="harry"){
        const website=" youtube";
        //console.log(username+website);
    }
   
    // console.log(website);
    

}

// console.log(username);


//**************************     intersting points mini hoisting    **********************//

addone(5);

function addone(num){
    return num+1
}

//  addone(5);

addtwo(5);
const addtwo=function(num){
    return num+2
}

// addtwo(5);