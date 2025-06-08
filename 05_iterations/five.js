
//foreach loop
const coding=["js","ruby","java","python","cpp","ml"];

// ye callback hota hai jis mein function ka naam nahi hota hai
coding.forEach(function (val){
    // console.log(val);
    
})

// fetch arrow function use liya hai 
coding.forEach((element) => {
// console.log(element);
    
});

// jab function use karege tab us refrence dena hai na ki call karna hai
// function printMe(item){
//     console.log(item);  
// }

// coding.forEach(printMe);

// coding.forEach( (item , index, arrlist) =>{
//     console.log(item,index,arrlist);
    
// } )

const myCoding=[
    {
        langname:"Javascript",
        langFilename:"js"

    },
    {
        langname:"Python",
        langFilename:"py"

    },
    {
        langname:"MachineLearning",
        langFilename:"ml"

    }
]

myCoding.forEach( (item) => {
console.log(item.langname);

}  )