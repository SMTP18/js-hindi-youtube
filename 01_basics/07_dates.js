//Video13
let myDate=new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

// let myCreatedDate=new Date(2025,0,23)
// let myCreatedDate=new Date(2025,0,23,5,3)
// let myCreatedDate=new Date("2025-01-30")
let myCreatedDate=new Date("01-15-2025")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp= Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000)); // Second mein value chiaye hoo

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})






