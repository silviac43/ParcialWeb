var celdasEdit = document.getElementsByClassName("celdaedit");
for (var i = 0; i < celdasEdit.length; i++) {
  celdasEdit[i].addEventListener("click", editarCeldas);
}
var condicion=false;

document.addEventListener("DOMContentLoaded", function () {
  var campo = document.getElementById("nom");
  var limpiar = document.getElementById("limpiar");
  limpiar.addEventListener("click",function() {
    campo.value="";
  })
})

function agregarFila() {
  var tabla = document.getElementById("gustos");
  var gusto = document.getElementById("nom").value;

  var fila = document.createElement("tr");
  var celdaGusto = document.createElement("td");
  var celdaPorc = document.createElement("td");
  var celdaEdit = document.createElement("td");

  celdaGusto.innerHTML = gusto;
  celdaPorc.innerHTML = 0;
  celdaEdit.innerHTML = "Editar";
  celdaEdit.className = "celdaedit";
  celdaEdit.classList.add("celdaedit");
  celdaEdit.addEventListener("click", editarCeldas);

  fila.appendChild(celdaGusto);
  fila.appendChild(celdaPorc);
  fila.appendChild(celdaEdit);

  tabla.appendChild(fila);
}

function editarCeldas() {
  if (!condicion){
  condicion = true;
  const actualizacion = document.getElementById('actualizacion');
  var celdaGusto = this.parentNode.cells[0];
  var celdaPorc = this.parentNode.cells[1];
  var celdaEdit = this.parentNode.cells[2];
  var nuevog= document.createElement("input");
  nuevog.classList.add('inp');
  nuevog.setAttribute('id','gus');
  nuevog.value=celdaGusto.innerHTML;
  celdaGusto.innerHTML="";
  celdaGusto.appendChild(nuevog);

  var nuevop= document.createElement("input");
  nuevop.value=celdaPorc.innerHTML;
  nuevop.classList.add('inp');
  nuevop.setAttribute('id','por');
  celdaPorc.innerHTML="";
  celdaPorc.appendChild(nuevop);

  celdaEdit.innerHTML="En edición";
  celdaEdit.removeEventListener("click",editarCeldas);
  celdaEdit.classList.add("clicked");
  actualizacion.classList.add('show')

  }
  else {
  var celdaGusto = this.parentNode.cells[0];
  var celdaPorc = this.parentNode.cells[1];
  celdaGusto.innerHTML="Solo se puede editar una línea.";
  celdaPorc.innerHTML="Recargue la página para poder editar otra.";
  }
}

function guardado() {
  var nombre=document.getElementById("nombre").value;
  var email=document.getElementById("email").value;
  var telefono=document.getElementById("telefono").value;
  var gusto=document.getElementById("gus").value;
  var porc=document.getElementById("por").value;

  var params = "recibido/?nombre=" + nombre +"&email=" + email + "&telefono="+ telefono + "&gusto=" + gusto + "&porc=" +  porc;
  params = params.replace("@","%40");

  var boton = document.getElementById("boton");
  boton.setAttribute("onClick",'parent.location.href="' + params + '"');
}
