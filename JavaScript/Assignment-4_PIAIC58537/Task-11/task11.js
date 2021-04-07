var input_value = prompt("Enter Number value!");
var input_length = input_value.split('');
var total = 0;
for(let i=0; i<input_length.length; i++){
    total += parseInt(input_length[i]);
}
var avg = total/input_length.length;
document.write("<h1>Mean of digits of value that you are Enter</h1>"+
    "<h1>Input : "+`${input_value}`+"</br>"+
    "</br>Output : "+`${avg}` +"</br>"+
    "</h1>"
);