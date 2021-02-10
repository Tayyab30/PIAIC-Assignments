var traffic_signal_color = prompt("Enter any Traffic Signal Color");

if(traffic_signal_color.toLowerCase() == "red"){
    alert("Must Stop!")
}else if(traffic_signal_color.toLowerCase() == "yellow"){
    alert("Ready to move!")
}else if(traffic_signal_color.toLowerCase() == "green"){
    alert("Move now")
}else{
    alert("Invalid Color!")
}