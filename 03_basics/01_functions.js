
//++++++++++++++++++++++++++++++++++++++ Video Number 19 +++++++++++++++++++++++++++++++++++//

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


//++++++++++++++++++++++++++++++++++++++ Video Number 20 +++++++++++++++++++++++++++++++++++//


//....num1 rest operator
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000)) // first two value will go in val 1 and val2 rest in num1 in array


//object bana liya use name se
const user = {
    username: "hitesh",
    prices: 199
}

//humnae anyobject naam islye rkha tak ki hum kisi bhi object ki value ko access karle ye name chnage ho sakta hai
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// yaha humein jis object ka data access karna hai hum function mein usi object name ko pass kraenge 
// handleObject(user)

/// here hum direct username amd price mein direct value put kar sakte hai tab iska user object se ki lena dena nahi hai
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));