window.onload = function(){ 
    pantalla=document.getElementById("resultado"); 
}

function load() {
	var mydata = JSON.parse(data);
	alert(mydata[0].name);
	alert(mydata[0].age);
}

function showList() {
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://api.movie.com.uy/api/shows/rss/data",
		"method": "GET"
	  }
	
	$.ajax(settings).done(function (response) {
		console.log(response);
		console.log("Funciones: " + response.contentCinemaShows.cinema);
		var content = response.contentCinemaShows.cinema;
		$("#contentCinemaShowsCinema").append(content);
		pantalla.innerHTML=content;
	  });

}

function showCategories() {

    
}