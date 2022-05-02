//All ready!. Page &  Cordova loaded.
//Todo listo!. Página & Cordova cargados.
function deviceReady() {
	
	try {
		//Example when Internet connection is needed but not mandatory
		//Ejemplo de cuando se necesita conexióna a Internet pero no es obligatoria.
		if (!mui.connectionAvailable()){
			if ('plugins' in window && 'toast' in window.plugins)
				mui.toast('We recommend you connect your device to the Internet');
			else
				mui.alert('We recommend you connect your device to the Internet');
		}
		
		//Install events, clicks, resize, online/offline, etc. 
		installEvents();

		//Hide splash.
		//Ocultar el splash.
		if (navigator.splashscreen) {
			navigator.splashscreen.hide();
		}
	} catch (e) {
		mui.alert(e.message);
	}
}

/**
 * Install events, clicks, resize, online/offline, etc., on differents HTML elements.
 * Instala eventos, clicks, resize, online/offline, etc., sobre diferentes elementos HTML.
 */
function installEvents() {
	
	mui.util.installEvents([
		//It's a good idea to consider what happens when the device is switched on and off the internet.
		//Es buena idea considerar que pasa cuando el dispositivo se conecta y desconecta a Internet.
		{
			id: document,
			ev: 'online',
			fn: () => {
				mui.alert('online','Connection');
			}
		},
		{
			id: document,
			ev: 'offline',
			fn: () => {
				mui.alert('offline','Connection');
			}
		},
		//Typically fired when the device changes orientation.
		//Típicamente disparado cuando el dispositivo cambia de orientación.
		{
			id: window,
			ev: 'resize',
			fn: () => {
				console.log('resize');
			}
		},
		//Mail list click/touch events. See that if the event is not specified, click is assumed.
		{
			id: '.mui-backarrow',
			fn: () => {
				mui.history.back();
				return false;
			}
		},
		{
			id: '.mui-headmenu, #gomodal',
			fn: () => {
				mui.screen.showPanel('menu-panel', 'SLIDE_LEFT');	//ATENTION!!! mui.screen instead mui.viewport
				return false;
			}
		},
		{
			id: '#gocontent',
			fn: () => {
				mui.viewport.showPage('content-page','DEF');
				return false;
			}
		},
		{
			id: '#golist',
			fn: () => {
				mui.viewport.showPage('list-page','DEF');
				return false;
			}
		},
		{
			id: '#golisticon',
			fn: () => {
				return false;
			}
		},
		{
			id: '#gotrans',
			fn: () => {
				mui.viewport.showPage('transitions-page','DEF');
				return false;
			}
		},
		{
			id: '#gotest',
			fn: () => {
				mui.viewport.showPage('api-page','DEF');
				return false;
			}
		},
		//Toolbar options ------------------------------------------
		{
			id: '#tabbar-button1',
			fn: () => {
				mui.viewport.showPage('home-page', 'NONE');
				mui.history.reset();	//Look at this!
				return false;
			}
		},
		{
			id: '#tabbar-button2',
			fn: () => {
				mui.history.reset();	//Look at this!
				openInAppBrowser('http://www.mobileui.org');
				return false;
			}
		},
		{
			id: '#tabbar-button3',
			fn: () => {
				mui.history.reset();	//Look at this!
				mui.viewport.showPage('content-page', 'DEF');
				return false;
			}
		},
		{
			id: '#tabbar-button4',
			fn: () => {
				openInAppBrowser('http://www.facebook.com');
				mui.history.reset();	//Look at this!
				return false;
			}
		},
		{
			id: '#tabbar-button5',
			fn: () => {
				mui.alert('MobileUI version ' + mui.version.toString());
				mui.history.reset();	//Look at this!
				return false;
			}
		},
		//API test options
		{
			id: '#api-cordova',
			fn: () => {
				if (mui.cordovaAvailable())
					mui.alert('Cordova/Phonegap is available!', 'Hurrah');
				else
					mui.alert('Cordova/Phonegap not available.');
				return false;
			}
		},
		{
			id: '#api-ismobile',
			fn: () => {
				if (mui.isMobileDevice.any())
					mui.alert('True', 'Hurrah');
				else
					mui.alert('False');
				return false;
			}
		},
		{
			id: '#api-vibrate',
			fn: () => {
				if (mui.cordovaAvailable())
					mui.vibrate();
				else
					mui.alert('Vibrate unavailable');
				return false;
			}
		},
		{
			id: '#api-busy',
			fn: () => {
				mui.busy(true);
				setTimeout(function() {
					mui.busy(false);
				}, 2000);
			}
		},
		{
			id: '#api-alert',
			fn: () => {
				mui.alert('Hello MUI', 'Cheers');
				return false;
			}
		},
		{
			id: '#api-confirm',
			fn: () => {
				mui.confirm('Are you happy?', function(buttonIndex) {
					mui.alert('Yo press button ' + buttonIndex, 'Result');
				},
				'Happiness',
				['Yes', 'No']
			);
			return false;
			}
		},
		{
			id: '#api-prompt',
			fn: () => {
				mui.prompt('How old are you?', function(result) {
					mui.alert('You pressed button ' + result.buttonIndex + '. Value=' + result.input1, 'Result');
				},
				'Age',
				['Ok', 'No thanks!'],
				'90'
			);
			return false;
			}
		},
		{
			id: '#api-connection',
			fn: () => {
				mui.alert(mui.getConnectionType(), 'Connection Type');
				return false;
			}
		},
		{
			id: '#api-toast',
			fn: () => {
				var msg;
				if (mui.cordovaAvailable() && mui.isMobileDevice.any())
					msg = 'This is a toast message';
				else
					msg = 'Using mui.alert() for compatibility when toast plugin are not available';
				mui.toast(msg, 'center', 'long');
				return false;
			}
		},
		{
			id: '#api-version',
			fn: () => {
				mui.alert(mui.version.toString(), 'Version');
				return false;
			}
		},
		{
			id: '#api-platform',
			fn: (currentPageId, originalTarget, event, startX, startY, endX, endY) => {
				if (mui.cordovaAvailable() && device && device.platform) {
					alert(device.model + '; ' + device.platform + ' - ' + device.version);
				}
				return false;
			}
		},
		//MobileUI viewport specific event.
		{
			vp: mui.viewport,
			ev: 'swiperight',
			fn: () => {
				if (!mui.viewport.panelIsOpen()) {
					mui.history.back();
				}
			}
		},
		{
			vp: mui.viewport,
			ev: 'swipeleftdiscover',
			fn: () => {
				if (!mui.viewport.panelIsOpen()) {
					mui.screen.showPanel('menu-panel', 'SLIDE_LEFT');	//ATENTION!!! mui.screen instead mui.viewport
					return false;
				}
			}
		}
	]);
	
	//Old fashion events style. Yes, of course is possible. It's a web standard!
	//jQuery
	$('#samplelist').click(function() {
		mui.alert('Nothing to do!', "Attention");
		return false;
	});
	
	//Pure javascript
	/*var menuOptions = document.getElementById('menuoptions')
	menuOptions.addEventListener('click', function() {
		mui.alert('Sorry. Nothing to do!', "Attention");
		return false;
	}, false);*/
	
}


/**
 * Courtesy: Open an url using InAppBrowser plugin.
 * Cortesía: Abre una url usando InAppBrowser plugin.
 * @param url
 */
function openInAppBrowser(url) { 
	window.open(encodeURI(url), '_blank', 'location=yes,closebuttoncaption=Volver,presentationstyle=pagesheet,transitionstyle="fliphorizontal",EnableViewPortScale=yes');
}

/**
 * Util function to force page link to be open in InAppBrowser.
 * Función Util para forzar que los links se abran en InAppBrowser.
 * @param id
 */
function linksForInAppBrowser(pageId){
	var idd = '#'+pageId ;
	$(idd).find('a').each(function (index, element) {
		var href = $(this).attr('href');
		$(this).attr('href', '#');
		$(this).attr('target', '_self');
		$(this).attr('onclick', 'window.open("' + href + '", "_blank");');
	});
}

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
                var peliculasComplejos = [];
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
						var currentMovie=this.movie;
						peliculasComplejos.push({cine,currentMovie});

						cines.push(cine);
                        
                        info.push(element);  
                        $("<ul/>", {
                            html: info.join()
                        });
                    });
        
                
                let set = new Set(cines.map(JSON.stringify))
                let arrSinDuplicaciones = Array.from(set).map(JSON.parse);
                
				
                        
				let setC = new Set(this.peliculasComplejos.map(JSON.stringify))
				arrSinDuplicacionesC = Array.from(setC).map(JSON.parse);
				
				console.log(arrSinDuplicacionesC);

        
                _this.cartelera = info;
                _this.cines=arrSinDuplicaciones;
				_this.peliculas.push(this.arrSinDuplicacionesM);
				console.log(_this.peliculas);
                
    
  
            });

      },
   
		   
		 getCinemas(){
		   console.log("entro");
			   
		   $("<ul/>", {
			   html: cines.join()
		   });
   
		 },
		 onChange: function(event){
			this.cineSeleccionado=event.target.value;
			return event.target.value;
		  }
   
	   },
	   created() {
		   this.function();
	   },
   })
   }
   
