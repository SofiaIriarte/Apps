function getData(){
    $.getJSON('https://api.movie.com.uy/api/shows/rss/data', function(data){
            console.log(data);
            var display = 
                `User_ID: ${data.contentCinemaShows.movie}<br>
                ID: ${data.contentCinemaShows.cinema}<br>
                Title: ${data.contentCinemaShows.genre}`                
            $(".display").html(display);
    })
    .done(function(data) {
        console.log("Done");
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        throw 'Error';
    });        
}


function getTitle(){
    $.getJSON('https://api.movie.com.uy/api/shows/rss/data', function(data){
        var display = 
            `User_ID: ${data.contentCinemaShows.movie}<br>
            ID: ${data.contentCinemaShows.cinema}<br>
            Title: ${data.contentCinemaShows.genre}`                
        $(".display").html(data.contentCinemaShows.movie);
    })
    .done(function(data) {
        console.log("Done");
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        throw 'Error';
    });        
}

