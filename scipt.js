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

