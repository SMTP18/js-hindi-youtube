const myObject={
   'js':'Javascript',
    'cpp':'c++'
}

//object par for in loop use hota hai
for (const key in myObject) {
    // console.log(key); // ye only key dega object ki
    // console.log(myObject[key]); // ye value dega ony object ki
    //console.log(`${key} :- ${myObject[key]}`);  
}

const programming=["js","java","python","ml","pandas"];

for (const key in programming) {
//    console.log(key); 
//console.log(programming[key]);
// console.log(`${key} :- ${programming[key]}`);
}

// map is not iterable so it will work on the for in loop
const map= new Map()
map.set('IN',"India");
map.set('CH',"China");
map.set('Fr',"France")

for (const key in map) {
    //console.log(key);
    
}