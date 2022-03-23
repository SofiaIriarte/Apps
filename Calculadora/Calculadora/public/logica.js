window.onload = function(){ 
    pantalla=document.getElementById("resultado"); 
}

x = "0"; //en a se almacena el numero en pantalla
xi = 1; //iniciar el numero en pantalla?: 1=si; 0=no (la opcion no es para continuar un numero que ya se estaba escribiendo)
coma = 0; //estado coma decimal 0=no, 1=si




function numero(xx) { 
    if (x=="0" || xi==1  ) {  //evalua que sea el primer numero en ingresarse
       pantalla.innerHTML=xx; //muestra el num
       x=xx; //iguala la variable
       if (xx==".") { 
          pantalla.innerHTML="0."; //si solo pone la coma entonces escribe 0.
          x=xx; //guarda el valor
          coma=1; //para recordar qur hay una coma puesta
          }
      }
      else {
          if (xx=="." && coma==0) { //si escribimos una coma por primera vez entonces escribe el num normal
              pantalla.innerHTML+=xx;
              x+=xx;
              coma=1; 
          }
         
          else if (xx=="." && coma==1) {} //si vuelve a poner una coma no hace nada
          
          else {
              pantalla.innerHTML+=xx; //si ya estaba iniciado, escribir el numero, normal 
              x+=xx
          }
       }
       xi=0 //el numero ya esta iniciado
    }

    function operar(){


    }

    function resolver(){


    }


    function borrarTodo(){
        pantalla.innerHTML = "0"

    }


    function porcentaje(){

    }

