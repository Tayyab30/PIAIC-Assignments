var qualifications = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
var count = 0;

document.write("<h1>Qualifications</h1>")

for(let i=0; i < 8; i++ ){
    count++
    document.write(`${count}`+")"+`${qualifications[i]}`+"</br>")
}