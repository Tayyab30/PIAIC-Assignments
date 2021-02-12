var color_name = ["Red","Blue","White","Green","Black"];
console.log(color_name);

alert(color_name);

var input_color_1 = prompt("Enter 1st color name that added in the last of array.");
var input_color_2 = prompt("Enter 2nd color name that added in the last of array.");

// added element in the end of array
color_name.unshift(input_color_1,input_color_2);

for(let i=0; i<color_name.length; i++){
    document.write("<h1>"+`${color_name[i]}`+"</h>")
}