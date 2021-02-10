var number = prompt("Enter Positive or negative Number!");

number = parseInt(number);
if(number > 0 ){
    document.write("<h1>You Enter Positive Number.</h1>")
}else if(number == 0  ){
    document.write("<h1>Please Enter a Value</h1>")
}if(number < 0 ){
    document.write("<h1>You Enter Negative Number.</h1>")
}