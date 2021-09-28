//only change code below this line
var myName;
var message;
var name = var myName;

//only change code above this line

myName = "Padawans";
function myMsg(name) {
"use strict";
message = "Hello, " + name + "!";

return message;
}

console.log(myMsg(myName)); 
module.exports = myMsg;