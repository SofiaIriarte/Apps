window.onload = function(){ 
    resultado=document.getElementById("resultado"); 
    }

a = "0"; //en a se almacena el numero en pantalla
initNum = 1; //iniciar el numero en pantalla?: 1=si; 0=no (la opcion no es para continuar un numero que ya se estaba escribiendo)
coma = 0; //estado coma decimal 0=no, 1=si

function numero(aa) {
    if (a=="0" || initNum==1  ) { //si no se ha ingresado otro num...
        resultado.innerHTML=xx; //mostrar en la pantalla
        a=aa; //guardar 
        }
     else { //si se esta continuando un num...
        resultado.innerHTML+=xx; 
        a+=aa; //se agrega y se guarda el valor
        }
     initNum=0 //dejamos la variable en cero porque ya esta iniciado el num
}

