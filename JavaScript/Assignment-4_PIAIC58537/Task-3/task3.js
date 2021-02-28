var pass = prompt("Enter Password\nPasswor must have alphabets, numbers, not start with number, at least 8 characters long.");
var first_char = parseInt(pass.slice(0,1));
console.log(first_char);
if(first_char !== first_char && pass.length >= 8){
    let letterNumber = /^[0-9&a-zA-Z]*$/;
    if(pass.match(letterNumber)){
        alert("Correct Password!")
    }else {
        alert("Password should contain alphabets and numbers Please Enter a valid Password")
    }
}else{
    alert("Password is InCorrect Please Enter a valid Password");
}