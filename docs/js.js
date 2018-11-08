function aleatorio() {
 var minimo = parseInt( document.getElementById("min").value);
 var salto  = parseInt(document.getElementById("salto").value);
 if(!salto)
     salto=1;
 var maximo = parseInt(document.getElementById("max").value);
 if(minimo > maximo){
   minimo= minimo/salto;
   maximo= Math.trunc(maximo/salto);
      var result = (Math.floor(Math.random() * (maximo - minimo + 1) ) + minimo)*salto;
          if(!result){
              document.getElementById("result").innerText = "ingrese valores";
          }else{

              document.getElementById("result").innerText = result;
          }
 }else{
 
  document.getElementById("result").innerText = "el minimo no puede se mayor que maximo";
 }
    
}
