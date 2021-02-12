var A = [24,53,78,91,12];
var max = A[0];

for(let i = 0; i<A.length; i++ ){
    if(max<A[i]){
        max = A[i];
    }
}

document.write(
    "<h1>Array items: "+ `${A}`+"</br>"+
    "The largest number is "+`${max}`+
    "</h1>")