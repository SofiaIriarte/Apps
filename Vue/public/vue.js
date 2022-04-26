
 window.onload=function(){
 let vm=new Vue({
    /*http://localhost:8000?name=John&email=john@gmail.com,
    parameters : this.$route.query,*/
    el:'#app',
    /*data:{
        contentCinemaShows:[],
        created: function() {
            this.getJson();
            console.log("645");
            var _this = this;
            $.getJSON('https://api.movie.com.uy/api/shows/rss/data', function (json) {
                _this.json = json;
        });
            
          },
    },*/
    data: {
        cartelera: null,
        //cinemas: null,
        //movies: null,
    },
    
    methods: {
        

        function () {
            var _this = this;
            $.getJSON('https://api.movie.com.uy/api/shows/rss/data', function (data) {
                //_this.json = data;
    
                var info = [];
    
                
                var display = 
                    data.contentCinemaShows.forEach(element => { //para cada elemento dentro de la data dentro del contentCinemaShows (contenido de cines, pelis, etc etc)
                        //movie: {[element].movie};
                        //var content = JSON.stringify(element); // paso de objeto a string
                        
                        var contenido=[];
                        var movie=null;
                        var description=null;
                        var posterURL=null;
                        var trailerURL=null;
                        //var cinema=[];
                        var shows=[];
                        
                        this.movie = element.movie;//movie.push(element.movie);
                        this.description = element.description;//description.push(element.description);
                        this.posterURL = element.posterURL;//posterURL.push(element.posterURL);
                        this.trailerURL = element.trailerURL;//trailerURL.push(element.trailerURL);
                        
    
    
                        element.cinemaShows.forEach(cinemas =>{
                            //cinema.push(cinemaShows.cinema);
                            //shows.push(cinemas.cinema);        //adentro de cada cine tengo shows con fecha y hora
                            var location=[]; //si location fuera null en vez de [] como hariamos???????????????????????????????
                            location.push(cinemas.cinema);
                            cinemas.shows.forEach(show => {
                                var dateTime=[];
                                dateTime.push(show.date);
                                dateTime.push(show.timeToDisplay);
                                location.push(dateTime); //date y time to display
    
    
                            })
                            //console.log(location);
                            shows.push(location);
                            //console.log(cinemaShows.cinema);
                    
                        })
                        contenido.push(movie);
                        contenido.push(description);
                        contenido.push(posterURL);
                        contenido.push(trailerURL);
                        contenido.push(shows);
    
                        //console.log(element.cinemaShows);
                        info.push(element);  //agrego al vector el valor de movie??
                        $("<ul/>", {
                            html: info.join()
                        });//.appendTo("body");
                    });
        
        
        
        
                _this.cartelera = info;
                //_this.movies = movie;
                //_this.cinemas = cinema;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
            });









        /*agregar: function () {
          this.append(perroNuevo) 
        }
        getJson: function(){
            $.getJSON('https://api.movie.com.uy/api/shows/rss/data',function(data){
                this.contentCinemaShows = data;
            }.bind(this));  // bind para que es??????/
        },
        agregar: function(){

        }*/

      }
    },
    created() {
        this.function();
    },/*function () {
        var _this = this;
        $.getJSON('https://api.movie.com.uy/api/shows/rss/data', function (data) {
            //_this.json = data;

            var info = [];

            
            var display = 
                data.contentCinemaShows.forEach(element => { //para cada elemento dentro de la data dentro del contentCinemaShows (contenido de cines, pelis, etc etc)
                    //movie: {[element].movie};
                    //var content = JSON.stringify(element); // paso de objeto a string
                    
                    var contenido=[];
                    var movie=null;
                    var description=null;
                    var posterURL=null;
                    var trailerURL=null;
                    //var cinema=[];
                    var shows=[];
                    
                    this.movie = element.movie;//movie.push(element.movie);
                    this.description = element.description;//description.push(element.description);
                    this.posterURL = element.posterURL;//posterURL.push(element.posterURL);
                    this.trailerURL = element.trailerURL;//trailerURL.push(element.trailerURL);
                    


                    element.cinemaShows.forEach(cinemas =>{
                        //cinema.push(cinemaShows.cinema);
                        //shows.push(cinemas.cinema);        //adentro de cada cine tengo shows con fecha y hora
                        var location=[]; //si location fuera null en vez de [] como hariamos???????????????????????????????
                        location.push(cinemas.cinema);
                        cinemas.shows.forEach(show => {
                            var dateTime=[];
                            dateTime.push(show.date);
                            dateTime.push(show.timeToDisplay);
                            location.push(dateTime); //date y time to display


                        })
                        console.log(location);
                        shows.push(location);
                        //console.log(cinemaShows.cinema);
                
                    })
                    contenido.push(movie);
                    contenido.push(description);
                    contenido.push(posterURL);
                    contenido.push(trailerURL);
                    contenido.push(shows);

                    //console.log(element.cinemaShows);
                    info.push(element);  //agrego al vector el valor de movie??
                    $("<ul/>", {
                        html: info.join()
                    });//.appendTo("body");
                });
    
    
    
    
            _this.cartelera = info;
            //_this.movies = movie;
            //_this.cinemas = cinema;














        });
    },*/
})
/*vm.plus()
vm.perros

setTimeout(function(){
    vm.message='magia'

},5000)*/
}