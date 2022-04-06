window.onload = function(){ 
    pantalla=document.getElementById("resultado"); 
}

function load() {
	var mydata = JSON.parse(data);
	document.body.innerHTML = mydata;
}

function showList() {
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://api.movie.com.uy/api/shows/rss/data",
		"method": "GET"
	  }
	
	$.ajax(settings).done(function (dataJson) {
		console.log(dataJson);
		console.log("Funciones: " + dataJson.contentCinemaShows.cinema);
		var complejos = dataJson.contentCinemaShows.cinema;
		$("#contentCinemaShowsCinema").append(complejos);
		pantalla.innerHTML=content;
		document.innerHTML(content);
	  });

}

function showCategories() {

    
}