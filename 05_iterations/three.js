// video number 29 --- High Order Array loop

// for of loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings="Hello world!";

for (const greet of greetings) {
    if (greet === ' ') {
        continue;
    }
    // console.log(`Each char is ${greet}`);
}


//------------------Maps---------------- ye unique value hold karta hai key value pair mein

const map= new Map()
map.set('IN',"India");
map.set('CH',"China");
map.set('Fr',"France")

// console.log(map);
// gar map ko array se normal form mein lana hai to then key varibale ko array mein conver karo with value
// for (const key of map) {
//     console.log(key);
    
// }
// map is  iterable so it will work on the array thing on it
for (const [key,value] of map) {
    // console.log(`${key} is my key  & ${value} is my value `);
    
}

// by using object

// const myObject={
//     game1:'NFS',
//     game2:'Mario'
// }

//myObject is not iterable so it won't work for of loop
// for (const [key,value] of myObject) {
//     console.log(`${key} is my key  & ${value} is my value `);
// }



