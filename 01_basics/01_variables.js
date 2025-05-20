const accountId=123456
let accountEmail="harry@gmail.com"
var accountPassword="1234"
accountCity="Delhi"

let accountState

//accountId=2 //not allowed to chnage const value in java script

accountEmail="negi@gmail.com"
accountPassword="0985"
accountCity="New Delhi"

console.log(accountId);
/*
Prefer not use to var and blank variable thing like accountCity decalered....
becuase issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
