var aCities = ["Karachi","Lahore","Islamabad","Faisalabad"];
var o = ["st","nd","rd","th"];
var count = 1;
for(let i=0; i< aCities.length; i++){
    document.write("<h1>"+`${count}`+`${o[i]}`+" choice is "+`${aCities[i]}`+"</h1>");
    count++;
}
