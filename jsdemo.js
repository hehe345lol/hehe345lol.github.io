console.log("This is loaded from the external JS file"); 
alert("This is an Alert! Click to continue.");

var name = prompt("what is your name?");
let school = prompt("what school do you attend?");
var fun_fact = prompt("what is something you would like for me to know about you?");

console.log(`Name: ${name}`);
console.log(`School: ${school}`);
console.log(`Fun Fact: ${fun_fact}`);

document.getElementById("name").innerHTML = "<b>Name:</b><i>" + name + "</i>";
document.getElementById("school").innerHTML = "<b>school:</b><i>" + school + "</i>";
document.getElementById("fun_fact").innerHTML = "<b>fun fact:</b><i>" + fun_fact + "</i>";
