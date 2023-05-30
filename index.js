function encriptar(){
    let texto =document.getElementById("texto").value;
    const imagen = document.getElementById("imagen");
    const info =document.getElementById("encabezado");
    let suTexto =document.getElementById("suTexto");
    if (texto.length !=0){
        let textoCifrado= texto.replace(/e/img, "enter").replace(/i/img, "imes").replace(/a/img, "ai").replace(/o/img, "ober").replace(/u/img, "ufat");
        suTexto.innerHTML = "Su texto encriptado es el suigiente:";
        document.getElementById("texto2").value = textoCifrado;
        imagen.setAttribute("src","imagenes/encriptar.png");
        info.innerHTML = "Texto encriptado con exito";

    }
    else{
        imagen.setAttribute("src", "imagenes/default.png");
        info.innerHTML= "Mensaje no encontrado, por favor ingrese un texto";
        sutexto.innerHTML="";
        document.getElementById("texto2").value = "";
    }

    console.log(texto);

}
function desEncriptar(){
    let textoCifrado = document.getElementById("texto").value;
    let imagen = document.getElementById("imagen");
    let info = document.getElementById("encabezado");
    let sutexto= document.getElementById("suTexto");
    if(document.getElementById("texto").value.length != 0){
        let textoDescifrado = textoCifrado.replace(/enter/img, "e").replace(/imes/img, "i").replace(/ai/, "a").replace(/ober/img, "o").replace(/ufat/img, "u");
        document.getElementById("texto2").value= textoDescifrado;
        imagen.setAttribute("src", "imagenes/desencriptar.png");
        info.innerHTML = "Texto desencriptado con exito";
        sutexto.innerHTML ="El texto desencriptado es el siguiente";
    }else{
        imagen.setAttribute("src", "imagenes/default.png")
        info.innerHTML= "Mensaje no encontrado, por favor ingrese un texto"
        sutexto.innerHTML="";
        document.getElementById("texto2").value = "";
    }
}
const botonCopy= document.getElementById("btn-copy");
const textoCopiar =document.getElementById("texto2");
botonCopy.addEventListener('click', e =>{
    textoCopiar.select();
    document.execCommand('copy');
})
