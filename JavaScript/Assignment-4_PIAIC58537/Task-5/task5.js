var number = parseFloat(prompt("Enter Positive Number!"));;
if(number > 0){
    document.write(
        "<h1>Number : " + `${number}`+ "</br>" +
        "round off value : " + `${Math.round(number)}`+"</br>" +
        "floor value : " + `${Math.floor(number)}`+"</br>" +
        "ceil value : " + `${Math.ceil(number)}`+

        "</h1>"
    );
}