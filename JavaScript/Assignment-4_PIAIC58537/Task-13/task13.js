var today = new Date("Dec 5, 2015");
var d = new Date("Jan 1, 1970");
var msToday = today.getTime();
var mselapseday = d.getTime();
var msdiff = msToday - mselapseday;
alert(msdiff);


