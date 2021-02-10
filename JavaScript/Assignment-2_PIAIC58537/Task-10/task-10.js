var user_pass = prompt("Enter Your Password.");
var correct_pass = "1234abcd";

if(!user_pass){
    document.write("<h1>Please enter your password.</h1>")
}else if(user_pass === correct_pass){
    document.write("<h1>Correct! </br> The password you entered matches the original password.</h1>");
}else{
    document.write("<h1>Incorrect password.</h1>");
    
}