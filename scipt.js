window.onload = function() {
  // Tu código JavaScript aquí
};

// function crear() {
//   const nombre = document.getElementById("nombre-input").value;
//   const apellido = document.getElementById("apellido-input").value;
//   const correo = document.getElementById("correo-input").value;
//   const clave = document.getElementById("clave-input").value;
//   const clave2 = document.getElementById("clave2-input").value;
//   if (
//     nombre == [] ||
//     apellido == [] ||
//     correo == [] ||
//     clave == [] ||
//     clave2 == []
//   ) {
//     alert("tienes que llenar todos los campos");
//   }
//   if (clave == clave2) {
//     alert("continuaras...");
//   } else {
//     alert("verifica tu contraseña");
//   }
// }
function botoncitos() {
  const botonPrincipal = document.getElementById('boton-principal');
  const botonesAdicionales = document.getElementById('botones-adicionales');

  botonPrincipal.addEventListener('click', () => {
    if (botonesAdicionales.style.display === 'none') {
      botonesAdicionales.style.display = 'block';
    } else {
      botonesAdicionales.style.display = 'none';
    }
  });
}
function seleccionarOpcion(index) {
  // Obtener todos los elementos 'a' dentro del menú
  var opciones = document.querySelectorAll('#menu a');  

  // Quitar la clase 'selected' de todas las opciones
  opciones.forEach(function(opcion) {
    opcion.classList.remove('selected');
  });

  // Agregar la clase 'selected' a la opción seleccionada
  opciones[index].classList.add('selected');
}

function reserva(){
  document.getElementById("billetera").style.display="none";
  document.getElementById("guardar").style.display="none";
  document.getElementById("detalles").style.display="none";

  document.getElementById("pedidos").style.display="none";
  document.getElementById("pedidoo").style.display="none";
  document.getElementById("vuelvo").style.display="none";

  // document.getElementById("subs-cuenta").style.display="none";
  // document.getElementById("mi-cuenta").style.display="none";
  document.getElementById("reservas").style.display="block";  

  }

function proximas(){
  document.getElementById("historial").style.display="none";  
  document.getElementById("proximas").style.display="block";  

}
function historial(){
  document.getElementById("proximas").style.display="none";  
  document.getElementById("historial").style.display="block";  

}
function billetera(){
  document.getElementById("reservas").style.display="none";
  document.getElementById("historial").style.display="none";
  document.getElementById("proximas").style.display="none";
  document.getElementById("pedidos").style.display="none";
  document.getElementById("pedidoo").style.display="none";
  document.getElementById("vuelvo").style.display="none";
  // document.getElementById("subs-cuenta").style.display="none";
  // document.getElementById("mi-cuenta").style.display="none";
  document.getElementById("billetera").style.display="block"; 
  document.getElementById("detalles").style.display="block"; 
  document.getElementById("guardar").style.display="block"; 



}
function pedidos(){
  document.getElementById("reservas").style.display="none";
  document.getElementById("historial").style.display="none";
  document.getElementById("proximas").style.display="none";
document.getElementById("billetera").style.display="none"; 
  document.getElementById("detalles").style.display="none"; 
  document.getElementById("guardar").style.display="none";
  // document.getElementById("subs-cuenta").style.display="none";
  // document.getElementById("mi-cuenta").style.display="none";
     document.getElementById("pedidos").style.display="block";
  document.getElementById("pedidoo").style.display="block";
  document.getElementById("vuelvo").style.display="block";



}
function subs(){
  alert("Ad")

}
function cuenta(){
  alert("Ae")

}
// esta funcion del display no me quiere y me dice esto(cannot read properties of null (reading style))
function iniciarsesion(){ 

  document.getElementById("crear-cuenta").style.display="none";
  document.getElementById("iniciar-sesion").style.display="block";  
}
function a(){   

    document.getElementById("iniciar-sesion").style.display="none";  
document.getElementById("crear-cuenta").style.display="block";
}
