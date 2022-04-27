function getData(){
    $.getJSON('https://api.movie.com.uy/api/shows/rss/data', function(data){
            var info=[];
            var display = 
                data.contentCinemaShows.forEach(element => {
                    movie: {[element].movie};                       // para que me sirven?????????????????????
                    description:{[element].description};
                    cinemaShows:{[element].cinemaShows};
                    /*cinema:{[element].cinemaShows.cinema};
                    shows:{[element].cinemaShows.shows};
                    date:{[element].cinemaShows.shows.date};
                    timeToDisplay:{[element].cinemaShows.shows.timeToDisplay};*/
                    var movie = JSON.stringify(element.movie);
                    //console.log(strJson);   
                    //$(".display").html(strJson);
                    info.push(movie);
                    //html: info.join( "" )
                    $( "<ul/>", {                     //donde abre el ol??????????????    <algo/>???????????????
                        //class: "my-new-list",        //q hace???????????
                        html: info.join()             //q hace???????????
                    }).appendTo( "body" );
                    })
                               
            /*$(".display").html(data.contentCinemaShows);
            var items = [];
            $.each( data, function( key, val ) {
                items.push( "<li id='" + key + "'>" + val + "</li>" );
            })u
            console.log(items);
            $( "<ul/>", {
                "class": "my-new-list",
                html: items.join( "" )
            }).appendTo( "body" );*/
    })
    .done(function(data) {
        console.log("Done");
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        throw 'Error';
    });        
}


     

