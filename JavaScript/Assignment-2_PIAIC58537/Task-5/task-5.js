var secret_number = 7;
var guess_number = prompt("Enter any Number from 1 to 10.");

if(guess_number == secret_number){
    document.write("<h1>Bingo! Correct answer</h1>")
}
if(guess_number == ++secret_number){
    document.write("<h1>Close enough to the correct answer</h1>")
}
