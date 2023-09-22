window.onload = inicio;


// function inicio() {
//     document.querySelector("body").insertAdjacentElement("beforebegin",`
//     <input id="campo" type="text">
//     <button>Aceptar</button>
//     <div id="saludo"></div>
//     `)
// }

function inicio() {
    document.querySelector("body").insertAdjacentHTML("beforeend", 
        `<input id="campo" type="text">
        <button>Aceptar</button>
        <div id="saludo"></div>`)
};