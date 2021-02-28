var text = "The quick brown fox jumps over the lazy dog.";
var count = (text.toLocaleLowerCase().match(/the/g)  ).length;

document.write(
    "<h1>Text : "+`${text}`+ "</br>"+
    "There are "+`${count}`+ " occurrence(s) of word 'the'" +
    "</h1>"
);