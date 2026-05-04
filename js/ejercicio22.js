import {mostrarTexto} from "./funciones22.js";
const campoTexto = document.querySelector("#campoTexto")

campoTexto.addEventListener("input", () => {
    mostrarTexto(campoTexto.value);
})