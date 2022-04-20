function getData(){
    $.getJSON('https://api.movie.com.uy/api/shows/rss/data', function(data){
            var display = 
                `User_ID: ${data.contentCinemaShows.movie}<br>
                ID: ${data.contentCinemaShows.cinema}<br>
                Title: ${data.contentCinemaShows.genre}`                
            $(".display").html(display);
            var items = [];
            $.each( data, function( key, val ) {
                items.push( "<li id='" + key + "'>" + val + "</li>" );
            });
            
            $( "<ul/>", {
                "class": "my-new-list",
                html: items.join( "" )
            }).appendTo( "body" );
    })
    .done(function(data) {
        console.log("Done");
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        throw 'Error';
    });        
}


     

