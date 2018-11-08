function aleatorio() {
 var minimo = parseInt( document.getElementById("min").value);
 var salto  = parseInt(document.getElementById("salto").value);
 if(!salto)
     salto=1;
 var maximo = parseInt(document.getElementById("max").value);

   minimo= minimo/salto;
   maximo= Math.trunc(maximo/salto);
      var result = (Math.floor(Math.random() * (maximo - minimo + 1) ) + minimo)*salto;
          if(!result){
              document.getElementById("result").innerText = "ingrese valores";
          }else{
            if(minimo > maximo){
              
 
               document.getElementById("result").innerText = "el minimo no puede ser mayor que maximo";
              }

              document.getElementById("result").innerText = result;
          }

    
}
