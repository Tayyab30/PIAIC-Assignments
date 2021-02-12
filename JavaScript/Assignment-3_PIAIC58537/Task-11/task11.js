var A = ["cake","apple pie","cookie","chips","patties"];
var search_food = prompt("Welcome to ABC Bakery.What do you want to order sir/mam?","cookie");
var find_food = false;
for(let i=0; i<A.length; i++){
    if(A[i] == search_food){
        alert("Cookie is Available at index "+ i + " in our bakery");
        find_food = true;
        break
    }
}

if(find_food == false){
    alert("We are sorry."+search_food + " is not available in our bakery")
}