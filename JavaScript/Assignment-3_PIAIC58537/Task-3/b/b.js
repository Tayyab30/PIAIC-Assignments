var color_name = ["Red","Blue","White","Green","Black"];
console.log(color_name);

alert(color_name);

var input_color = prompt("Enter color name that added in the last of array.");
// added element in the end of array
color_name.push(input_color);

for(let i=0; i<color_name.length; i++){
    document.write("<h1>"+`${color_name[i]}`+"</h>")
}