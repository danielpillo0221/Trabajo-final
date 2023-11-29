

const clavedani = "Margalopez0221"
const usuariodani = "eldani123"
const usuarioclase = "usuario"
const claveclase = "123456789"
const Medellin = "medellin"
const LaUnion = "la union"
const laCeja = "la ceja"
const Bogota = " bogota"
const Rionegro = "rionegro"
const DonMatias = "don matias"
const SantaRosaDeosos = "santarosa de osos"
const EntreRios = "entre rios"
const SantaFe= "santa fe"
const ValleDelCauca ="valle del cauca"
const  SantaMarta =" santa marta"
const Guatape ="guatape"
const ElPeñol ="el peñol"
const Abejorral ="abejorral"
const Sonson ="sonson"
const Nariño ="nariño"
const Bello ="bello"
const Sabaneta ="sabaneta"
const Envigado ="envigado"
const Cartagena ="cartagena"
const Cordoba = "cordoba"
const  Bucaramanga="bucaramanga"
const VillaVicencio="villaciencio"
const Huila="huila"
const Barranquilla="barranquilla"
const Ibague="ibague"
const Pereira="pereira"
const Manizales="manizales"
const valledupar="valledupar"
const Monteria="monteria"
const Armeria="armeria"
const Pasto="pasto"
const Buenaventura="buenaventura"
const Palmira="palmira"
const Girardota="girardota"
const Apartadon="apartado"
const Florencia="florencia"




function asesion() {
        const destino = document.getElementById("destino").value
        document.getElementById("pagina1").style.display = "none";
    document.getElementById("pagina2").style.display = "block";
 alert(destino)
       
    }
    
    
    
    

function iniciarsesion(){
    const clave =document.getElementById("contrasena").value
    const usuario =document.getElementById("usuario").value
   if (usuario==usuariodani && clave==clavedani){
       document.getElementById("pagina2").style.display="none";
       document.getElementById("pagina4").style.display="block";   
   
     
   }
   
   if (usuario==usuarioclase && clave==claveclase){
       document.getElementById("pagina2").style.display="none";
       document.getElementById("pagina4").style.display="block";   
        
      }
      else{
       alert("la clave o el usuario es incorrecto intenta de nuevo")
   }
   
   }
   function crearperfil(){
       document.getElementById("pagina2").style.display="none";
       document.getElementById("pagina3").style.display="block";  
       
   
          
   
   }
   function iniciarsesionn(){
       const contrasena1 =document.getElementById("contrasena1").value
       const contrasena2 =document.getElementById("contrasena2").value
   
   
   
       if(contrasena1==contrasena2 ){
   document.getElementById("pagina3").style.display="none";
   document.getElementById("pagina4").style.display="block";   
     }  
   else{
       alert("verifica tu contraseña")
   }
   }




