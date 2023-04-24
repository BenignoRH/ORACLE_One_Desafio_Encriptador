
/*function eliminarHijos() {
    var padre = document.querySelectorAll("div.salida");
    for (var i = 0; i < padre.children.length; i++) {
      var hijo = padre.children[i]
      padre.remove(hijo)
    }
  }*/


/*function ocultar (){
    var capa = document.getElementById('avatarmensajes');
    capa.style.display = none;
    capa.style.visibility=hidden;
    return false;
}*/

/*function inputencriptado() {
    var i = document.createElement('input');
    i.setAttribute("type", "text");
    i.setAttribute("class", "encriptado");
    var contenedor = document.querySelectorAll("div.salida");
    contenedor.insertAdjacentElement("beforeend", i);
}*/

function eliminarHijos(){
    var elem = document.getElementById('avatarmensajes');
    elem.parentNode.removeChild(elem);

    var textarea = document.getElementById('msg');
    textarea.style.display = 'block';
    textarea.style.visibility = 'visible';
    var button = document.getElementById('copia');
    button.style.display = 'block';
    button.style.visibility = 'visible';
    return false;
}


function encriptar (){
    var textoIngresado = document.getElementById("textarea").value;
    if (textoIngresado != ""){
        var textoCifrado = textoIngresado.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat"); 
        document.querySelector(".encriptado").value = textoCifrado;
        document.getElementById("textarea").value = textoIngresado;
        eliminarHijos();
                
    }else{
        alert("no se encontro texto para encriptar");
    }  
}
    

function desencriptar (){ 
    var textoIngresado = document.getElementById("textarea").value;
    if(textoIngresado != ""){ 
    var textoDescifrado = textoIngresado.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector(".encriptado").value = textoDescifrado; 
    document.getElementById("textarea").value = textoIngresado;
    eliminarHijos();
    }else{
        alert("no se encontro texto para desencriptar")
    }
}

function copiar() {
    let textoCopiado = document.querySelector(".encriptado");
    textoCopiado.select();
    document.execCommand("copy");
    alert("texto copiado exitosamente");
  }
