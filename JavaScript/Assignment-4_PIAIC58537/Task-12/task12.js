var c_date = new Date();
if (c_date.getDate() < 16 ) {
    document.write("<h1>First fifteen days of themonth</h1>")
}else{
    document.write("<h1>“Last days of the month</h1>")
}