// Number # 14

var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;

document.write(
    "<h2> Output of --a is: "+ --a +
    "</br> Output of --a - --b is: "+ (--a - --b) + 
    "</br> Output of --a - --b + ++b is: " + (--a - --b + ++b) +
    "</br> Output of --a - --b + ++b + b-- is: "+ (--a - --b + ++b + b--) +
    "</br></br> value of a is: "+ a +
    "</br> value of b is: "+ b +
    "</br> value of result is: "+ result + "</h2>"
);
