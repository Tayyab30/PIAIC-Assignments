// program to check if the number is even or odd
// take input from the user
const number = prompt("Enter a number: ");

// 
// check if empty
if(!number){
    document.write("<h1>Pleas Enter a Number.</h1>")
}
//check if the number is even
else if(number % 2 == 0) {
    document.write("<h1>The number is even.</h1>")
}

// if the number is odd
else {
    document.write("<h1>The number is odd.</h1>")

}