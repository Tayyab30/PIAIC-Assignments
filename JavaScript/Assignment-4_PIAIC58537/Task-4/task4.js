var email = prompt("Enter Your Address!");
var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

if(!filter.test(email)){
    alert("Wrong Email Address!")
}else{
    alert("Email Is Valid!");
}