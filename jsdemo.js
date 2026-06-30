console.log("This is loaded from the external JS file"); 
var name = "khaleb";
let school = "CATO";
var fun_fact ="One ranked game brought me from rank 4409 on bardock to rank 23."

console.log(`Name: ${name}`);
console.log(`School: ${school}`);
console.log(`Fun Fact: ${fun_fact}`);

document.getElementById("name").innerHTML = "<b>Name:</b><i>" + name + "</i>";
document.getElementById("school").innerHTML = "<b>school:</b><i>" + school + "</i>";
document.getElementById("fun_fact").innerHTML = "<b>fun fact:</b><i>" + fun_fact + "</i>";
