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
  boton1.innerHTML = "Mis reservas";
  boton1.onclick = function() {
alert("b")  };

  var boton2 = document.createElement("button");
  boton2.innerHTML = "Mi billetera";
  boton2.onclick = function() {
alert("a")  };
var boton3 = document.createElement("button");
boton3.innerHTML = "Mis pedidos";
boton3.onclick = function() {
alert("b")  };

var boton4 = document.createElement("button");
boton4.innerHTML = "Mi cuenta";
boton4.onclick = function() {
alert("a")  };
var boton5 = document.createElement("button");
boton5.innerHTML = "Cerrar Sesion";
boton4.onclick = function() {
alert("a")  };

  // Agrega los botones al DOM
  var contenedor = document.getElementById("contenedor");
  contenedor.appendChild(boton1);
  contenedor.appendChild(boton2);
  contenedor.appendChild(boton3);
  contenedor.appendChild(boton4);



  boton1.style.backgroundColor = "black"; // Cambia el color de fondo a rojo
boton2.style.backgroundColor = "black";// Cambia el color de fondo a rojo
boton3.style.backgroundColor = "black"; // Cambia el color de fondo a rojo
boton4.style.backgroundColor = "black"; // Cambia el color de fondo a azul
 // Cambia el color de fondo a azul
boton2.style.color = "white"; // Cambia el color del texto a blanco
boton1.style.color = "white"; // Cambia el color del texto a blanco
// boton5.style.backgroundColor = "black"; // Cambia el color de fondo a azul
boton3.style.color = "white"; // Cambia el color del texto a blanco
boton4.style.color = "white"; // Cambia el color del texto a blanco
// boton5.style.color = "white"; // Cambia el color del texto a blanco
boton1.style.border = "none";
boton2.style.border = "none";
boton3.style.border = "none";
boton4.style.border = "none";
// boton5.style.border = "none";
boton1.style.padding = "15px ";
boton2.style.padding = "15px ";
boton3.style.padding = "15px ";
boton4.style.padding = "15px ";
// boton5.style.padding = "15px 40px";
boton1.style.fontSize = "14px";
boton2.style.fontSize = "14px";
boton3.style.fontSize = "14px";
boton4.style.fontSize = "14px";
// boton5.style.fontSize = "12px";
boton1.style.cursor ="pointer";
boton2.style.cursor ="pointer";
boton3.style.cursor ="pointer";
boton4.style.cursor ="pointer";
// boton5.style.cursor ="pointer";
boton1.style.width="180px"
boton2.style.width="180px"
boton3.style.width="180px"
boton4.style.width="180px"
boton5.style.width="180px"
}

