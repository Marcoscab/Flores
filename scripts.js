window.onload =clickFlores;


function clickFlores(){

    document.getElementById("f1").onclick = saludo("1");
}

function saludo(_nFlor){
    alert("soy la flor: "+_nFlor);
}