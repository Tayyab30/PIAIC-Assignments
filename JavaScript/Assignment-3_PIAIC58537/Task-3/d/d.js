var color_name = ["Red","Blue","White","Green","Black"];
console.log(color_name);

alert(color_name);

// delete element in the start of array
color_name.shift();

for(let i=0; i<color_name.length; i++){
    document.write("<h1>"+`${color_name[i]}`+"</h>")
}