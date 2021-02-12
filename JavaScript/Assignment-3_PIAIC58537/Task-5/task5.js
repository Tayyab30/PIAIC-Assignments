var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

var uniqueSet = Array.from(new Set(arr1));

document.write(
    "<h1>Output:</h1>"+
    "<h2>"+`${uniqueSet}`+"</h2>"
);
console.log(uniqueSet);