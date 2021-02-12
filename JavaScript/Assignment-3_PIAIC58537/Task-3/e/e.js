var color_name = ["Red","Blue","White","Green","Black"];
console.log(color_name);

alert(color_name);

// Delete element in the end of array
color_name.pop();

for(let i=0; i<color_name.length; i++){
    document.write("<h1>"+`${color_name[i]}`+"</h>")
}