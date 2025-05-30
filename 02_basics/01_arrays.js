//Video Number 14
//ARRAY.....

const myArr=[0,1,2,3,4,5]; //indexing se isko fetch karte hai
// const myHeors=["Saktiman","Powerman"];

// const myArr2=new Array(1,2,3,4);
// console.log(myArr[0]);

//============ Array Methods ==============
//#push() method - new value add kadenge 
// myArr.push(6); // push method value ko add karta hai
// myArr.push(7);
// console.log(myArr);
//#pop() method - jo bhi last value hai usko remove kardenge ismien koi value nahi di jaati
// myArr.pop();
// console.log(myArr);

//# unshift() & shift() 
//myArr.unshift(9); // ye method ye value ko strating mein add karta hai matlab zero  index kein place par
// myArr.shift();    // ye method ye value ko strating se remove karta hai matlab zero index kein place ki value like pop

//investigation study
//console.log(myArr.includes(9)); // includes se check kia ki kya ye 9 value hai this myArr mein result True / False mein aaega
//indexof
//console.log(myArr.indexOf(3)); // kisi array value ka index number find karna , agar wo array nahi hai then -1 dega result

// const newArr=myArr.join(); // array ko string mein convert karta hai join method

// console.log(myArr);
// console.log(newArr);
// console.log(typeof(newArr));


// ################# Slice ,splice method ####################

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

//Note slice ek range mein last number ko print nahi karta hai and ye main array ko manipulate nahi karta [ matlab chnage nahi karta]
//Note splice ek range mein last number ko print karta hai and ye main array ko manipulate karta hai [ matlab chnage  karta hai]
//matlabe splice mein jo range liye hai un array ko main array se remove kardeta hai



