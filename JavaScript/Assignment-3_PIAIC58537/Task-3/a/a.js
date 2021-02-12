var color_name = ["Red","Blue","White","Green","Black"];
console.log(color_name);

alert(color_name);

var input_color = prompt("Enter color name that added in the beginning of array.");
// added element in the start of array

color_name.unshift(input_color);

for(let i=0; i<color_name.length; i++){
    document.write("<h1>"+`${color_name[i]}`+"</h>")
}