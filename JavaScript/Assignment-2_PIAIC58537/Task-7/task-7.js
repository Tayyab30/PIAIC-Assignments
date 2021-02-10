var first_number = prompt("Enter First Number.");
var operator = prompt("Enter Operator.");
var second_number = prompt("Enter Second Number.");


if(operator == "+"){
    document.write("<h1>Result is : "+ `${parseInt(first_number ) + parseInt(second_number)}`+"<h1>")
}else if(operator == "-"){
    document.write("<h1>Result is : "+ `${parseInt(first_number ) - parseInt(second_number)}`+"<h1>")
}else if(operator == "*"){
    document.write("<h1>Result is : "+ `${parseInt(first_number ) * parseInt(second_number)}`+"<h1>")
}else if(operator == "/"){
    document.write("<h1>Result is : "+ `${parseInt(first_number ) / parseInt(second_number)}`+"<h1>")
}else if(operator == "%"){
    document.write("<h1>Result is : "+ `${parseInt(first_number ) % parseInt(second_number)}`+"<h1>")
}else{
    document.write("<h1>Invalid Operator!<h1>")
}
