const name="Harry";
const repoCount=50;
//console.log(name+repoCount+" Value"); :- now days we will not consider that way to concatenate

// Nowdays we use string interpolation matlan modern day mein string ko likhna or concatenate karna

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//New way to decalre string ismein key value pair aata hai

const gameName=new String('harrynegi');

// console.log(gameName[0]);
// console.log(gameName.__proto__); // access object using proto type syntax -- __proto__
// console.log(gameName.length); // using length syntax 
// console.log(gameName.toUpperCase()); // using toUpperCase Function - toUpperCase()
// console.log(gameName.charAt(3)); // using chartAt function is mein index number dalte hai to check konsa word hai is index number par
// console.log(gameName.indexOf('r')); // to get know r ka index number kya hai


const newString=gameName.substring(0,4); // ye 0 se 3 index tak string print karega 
// console.log(newString);

const anotherString=gameName.slice(0,4); // slice mein hum reverse se bhi value le sakte hai but using negtive sign -4
const anotherNewString=gameName.slice(-8,4);
// console.log(anotherString);
// console.log(anotherNewString);

const newStringeOne="   Harry";
// console.log(newStringeOne);
// console.log(newStringeOne.trim()); // trim() function humre strating and end spcae ho remove kardeta hai

//replace() function

const url="https://hitesh.com/hitesh%20choudhary";

console.log(url.replace('%20','-'));
console.log(url.replace('hitesh.com','harry.in'));


 




