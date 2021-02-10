var x = prompt("Enter only one Character and chek the vowel word.");

if(!x){
    document.write("<h1>Please Enter a Character</h1>")
}else if(x.length == 1){

    if(x == "a" || x == "e" || x == "i" || x == "o" || x == "u" ){
    document.write("<h1>true</h1>")
    }else{
    document.write("<h1>flase</h1>")

    }
}else{
    alert("Please Read the requirment!")
}