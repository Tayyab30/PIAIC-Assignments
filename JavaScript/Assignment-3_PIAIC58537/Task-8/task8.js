var  Counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// Numbers are in Reverse 
var  reverse_counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var reverseCounting = reverse_counting.reverse();

// Even numbers
var evens = Counting.filter(number => number % 2 == 0);

// Odd numbers
var odd = Counting.filter(number => number % 2 != 0);

// Values are in K and M formate
var series = [2200,3400,4450,59928939];

for(let i=0; i<series.length; i++){
    if(series[i] > 999 && series[i] < 1000000){
        series[i] = (series[i]/1000).toFixed(1) + 'K'; // convert to K for seriesber from > 1000 < 1 million 
    }else if(series[i] > 1000000){
        series[i] = (series[i]/1000000).toFixed(1) + 'M'; // convert to M for seriesber from > 1 million 
    }else if(series[i] < 900){
        series[i] = series[i]; // if value < 1000, nothing to do
    }
}

document.write(
    "<h2>a. Counting: "+`${Counting}`+"</br>"+
    "b. Reverse counting: "+`${reverseCounting}`+"</br>"+
    "c. Even: "+ `${evens}`+"</br>"+
    "d. Odd: "+ `${odd}`+"</br>"+
    "e. Series: "+ `${series}`+"</br>"+
    "</h2>"
);



























