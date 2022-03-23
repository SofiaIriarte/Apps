window.onload = function(){ 
    pantalla=document.getElementById("resultado"); 
}

x = "0"; //en a se almacena el numero en pantalla
xi = 1; //iniciar el numero en pantalla?: 1=si; 0=no (la opcion no es para continuar un numero que ya se estaba escribiendo)
coma = 0; //estado coma decimal 0=no, 1=si
firstNum = 0; //en operaciones indica si es el primer numero ingresado o el segundo (0=primer num 1=segundo num)
op = null; //almacena el valor del operador seleccionado 


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

    function operar(s){
        
        resolver(); //primero resuelve cualquier cosa que podria tener pendiente
        firstNum = x; 
        op = s;
        xi = 1;

    }

    function resolver(){

        if(op==null){
            pantalla.innerHTML = x;
    
        }else{

            cuenta = firstNum + op + x; //concatena los numeros y el operador
            solucion = eval(cuenta);  //evalua la cuenta
            pantalla.innerHTML = solucion; //muestra la solucion y restaura las variables
            op = null;
            x = solucion;
            xi = 1;

        }


    }


    function borrarTodo(){
        pantalla.innerHTML = "0"; //muestra cero en pantalla
        x = 0;
        op = null; //elimina todas las variables qeu usabamos y las restaura la valor original
        xi = 1;
        firstNum = 0;
        coma = 0;
    }


    function porcentaje(){  
        xx = x/100;  //diivde entre 100 el numero y luego resuelve la cuenta que tenia pendiente
        pantalla.innerHTML = xx;
        resolver();   //entonces si queremos el 50% de 8 deberiamos teclear: 8x50% (daria 4)
        xi = 1;

    }

    function opuesto(){  //cambia el signo del numero escrito
        nx= Number(x); 
        nx =-nx; 
        x=String(nx);  //hay que convertirlo en formato numero y despues de vuelta a String
        pantalla.innerHTML=x; 
        xi = 1;
            

    }

