var cities_names = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
document.write(
    "<h1>Cities list:</h1>"+
    "<h2>"+`${cities_names}`+"</h2>"
);

var selected_cities = cities_names.slice(2,4);
document.write(
    "<h1>Selected Cities list:</h1>"+
    "<h2>"+`${selected_cities}`+"</h2>"
);

