

function getData() {
    $.getJSON('https://api.movie.com.uy/api/shows/rss/data', function (data) {
        console.log("Exito");
        var peliculas = [];
        //var display =
        data.contentCinemaShows.forEach(element => {
            titulo: { [element].movie };
            descripcion: { [element].description };
            trailer: { [element].trailerURL };
            imagen: { [element].posterURL };

            // var strJson = JSON.stringify(element.movie);
            // peliculas.push(strJson);

            /* $("<ul/>", {
                 "class": "my-new-list",
                 html: peliculas.join("")
             }).appendTo("body");*/

            var strTitulo = JSON.stringify(element.movie);
            var strDesc = JSON.stringify(element.description);
            var strTrailer = JSON.stringify(element.trailerURL);
            var strImagen = JSON.stringify(element.posterURL);

            var peli = {
                titulo: strTitulo,
                descripcion: strDesc,
                trailer: strTrailer,
                imagen: strImagen
            };


            peliculas.push(peli);

          
           
        })

        console.log(peliculas);
        crearTabla(peliculas);

    })
        .done(function (data) {
            console.log("Done");
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            throw 'Error';
        });
}


function crearTabla(peliculas) {

        peliculas.forEach(peli => {
            $("<ul/>", {
                "class": "my-new-list",
                html: peli.titulo,
            }).appendTo("body");
        })

}
     







