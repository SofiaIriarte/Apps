
 window.onload=function(){
 let vm=new Vue({
   
    el:'#app',
   
    data: {
        cines: [],
        peliculas: [],
        cartelera: null,
    },
    
    methods: {
        

        function () {
            var _this = this;
            $.getJSON('https://api.movie.com.uy/api/shows/rss/data', function (data) {
                var info = [];
                var cines = [];
                var peliculas = [];
                var arrSinDuplicacionesM=[];
                
                var display = 
                    data.contentCinemaShows.forEach(element => { 
                        
                        var contenido=[];
                        var movie=null;
                        var description=null;
                        var posterURL=null;
                        var trailerURL=null;
                        var shows=[];
                
                        var cine = [];
                
                        this.movie = element.movie;
                        
                        this.description = element.description;
                        this.posterURL = element.posterURL;
                        this.trailerURL = element.trailerURL;
                        
                        
                        element.cinemaShows.forEach(cinemas =>{
                            var location=[]; 
                            location.push(cinemas.cinema);
                            cine = cinemas.cinema;
                            cinemas.shows.forEach(show => {
                                var dateTime=[];
                                dateTime.push(show.date);
                                dateTime.push(show.timeToDisplay);
                                location.push(dateTime);
    
    
                            })
                            shows.push(location);
                            
                    
                        })
                        
                        
                        contenido.push(this.movie);
                        contenido.push(this.description);
                        contenido.push(this.posterURL);
                        contenido.push(this.trailerURL);
                        contenido.push(this.shows);

                        
                        peliculas.push(this.movie);
                        let setM = new Set(peliculas.map(JSON.stringify))
                        arrSinDuplicacionesM = Array.from(setM).map(JSON.parse);
                        cines.push(cine);
                        
                        info.push(element); 
                        $("<ul/>", {
                            html: info.join()
                        });
                    });
        
                
                let set = new Set(cines.map(JSON.stringify))
                let arrSinDuplicaciones = Array.from(set).map(JSON.parse);
        
                _this.cartelera = info;
                _this.cines=arrSinDuplicaciones;
                _this.peliculas.push(this.arrSinDuplicacionesM);
    
            });

      },
      
      getCinemas(){
        console.log("entro");
            
        $("<ul/>", {
            html: cines.join()
        });

      }

    },
    created() {
        this.function();
    },
})
}



