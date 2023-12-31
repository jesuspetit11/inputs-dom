window.onload = inicio;
const NOMBRECORRECTO = "JESUS";

function inicio() {
    document.querySelector("body").insertAdjacentHTML("beforeend",
        `<input id="campo" type="text"/>
        <button>Aceptar</button>
        <div id="saludo"></div>`);
        document.querySelector("button").addEventListener("click", leer);
};

function leer() {
    let nombre = document.querySelector("#campo").value;
    let nombreMayus = nombre.toUpperCase();
    let nombreFormateado = nombre.substr(0,1).toUpperCase() + nombre.substr(1).toLowerCase();
    if(nombreMayus == NOMBRECORRECTO){
        document.querySelector("#saludo").innerHTML = `Hola ${nombreFormateado}`;
    } else {
        document.querySelector("#saludo").innerHTML = "";
        document.querySelector("#campo").value = "";
        document.querySelector("#campo").focus();
    }
}
