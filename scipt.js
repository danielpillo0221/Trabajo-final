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
function reserva(){
  alert("A")
}
function billetera(){
  alert("Ab")

}
function pedidos(){
  alert("Ac")

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
function reserva(){
  document.getElementById("reservas").style.display="block";  

}