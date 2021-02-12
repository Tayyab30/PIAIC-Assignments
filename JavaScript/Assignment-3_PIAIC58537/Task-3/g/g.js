var color_name = ["Red","Blue","White","Green","Black"];
console.log(color_name);

alert(color_name);

var index_1 = parseInt(prompt("Enter index where from you want to del color."));
var index_2 = parseInt(prompt("Enter amount which how many color del from array."));

//  Delete elements from arrray
color_name.splice(index_1,index_2);

for(let i=0; i<color_name.length; i++){
    document.write("<h1>"+`${color_name[i]}`+"</h>")
}