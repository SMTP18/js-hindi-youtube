//video number 27

// for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element==5){
        //console.log("5 is best number");
        
    }
    //console.log(element); 
}

//*******************loop inside loop************************/

for (let i = 1; i <=10; i++) {
    //console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <=10; j++) {
      //console.log(`Inner loop value: ${j} and inner value ${i}`);
      //console.log(`${i} * ${j} =${j*i}`);   
    }
    
}

//*********************** loop in array*******************//

let myArray=["flash","Arrow","Superman"];
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
}

//*******************break and continue in for loop ************************//

for (let index = 0; index <= 20; index++) {
    if(index==5){
        //console.log(`Detected 5`);
        break;  
    }
    //console.log(`value of i is ${index}`);
}

for (let index = 0; index <= 20; index++) {
    if(index==5){
        console.log(`Detected 5`);
        continue;  
    }
    console.log(`value of i is ${index}`);
}

