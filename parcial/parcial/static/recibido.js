document.addEventListener("DOMContentLoaded", function () {

function getParams() {
    var idx = document.URL.indexOf('?');
    var params = new Array();
    if (idx != -1) {
    var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
    for (var i=0; i<pairs.length; i++) {
    nameVal = pairs[i].split('=');
    nameVal[1]= nameVal[1].replace("%40","@");
    params[nameVal[0]] = nameVal[1];
       }
    }
    console.log(params);
    return params;
    }
    params = getParams();
   
function cargar(params){
    nombre=document.getElementById("nomb");
    correo=document.getElementById("correo");
    telefono=document.getElementById("telef");
    gusto=document.getElementById("gust");
    porcentaje=document.getElementById("porce");

    nombre.innerHTML=params["nombre"];
    correo.innerHTML=params["email"];
    telefono.innerHTML=params["telefono"];
    gusto.innerHTML=params["gusto"];
    porcentaje.innerHTML=params["porc"];
    
}
    cargar(params);
})