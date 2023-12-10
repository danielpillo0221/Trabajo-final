function crear(){
    const nombre= document.getElementById("nombre-input").value;
    const apellido= document.getElementById("apellido-input").value;
    const correo= document.getElementById("correo-input").value;
    const clave= document.getElementById("clave-input").value;
    const clave2= document.getElementById("clave2-input").value;
    if ( nombre==[] || apellido==[] || correo==[] ||clave==[] || clave2==[]) {
    alert("tienes que llenar todos los campos")}
if(clave==clave2){
    alert("continuaras...")
 
}else{
    alert("verifica tu contraseña")
}

}
function botoncitos(){
      // Crea los botones que deseas mostrar
  var boton1 = document.createElement("button");
  boton1.innerHTML = "Botón 1";
  boton1.onclick = function() {
alert("b")  };

  var boton2 = document.createElement("button");
  boton2.innerHTML = "Botón 2";
  boton2.onclick = function() {
alert("a")  };
var boton3 = document.createElement("button");
boton3.innerHTML = "Botón 3";
boton3.onclick = function() {
alert("b")  };

var boton4 = document.createElement("button");
boton4.innerHTML = "Botón 4";
boton2.onclick = function() {
alert("a")  };

  // Agrega los botones al DOM
  var contenedor = document.getElementById("contenedor");
  contenedor.appendChild(boton1);
  contenedor.appendChild(boton2);
  contenedor.appendChild(boton3);
  contenedor.appendChild(boton4);



  boton1.style.backgroundColor = "black"; // Cambia el color de fondo a rojo
boton2.style.backgroundColor = "black"; // Cambia el color de fondo a azul
boton2.style.color = "white"; // Cambia el color del texto a blanco
boton1.style.color = "white"; // Cambia el color del texto a blanco
boton3.style.backgroundColor = "black"; // Cambia el color de fondo a rojo
boton4.style.backgroundColor = "black"; // Cambia el color de fondo a azul
boton3.style.color = "white"; // Cambia el color del texto a blanco
boton4.style.color = "white"; // Cambia el color del texto a blanco
boton1.style.border
boton2.style.border
boton3.style.border
boton4.style.border
}

