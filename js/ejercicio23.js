import { mostrar_texto, cambiar_fondo } from "./funciones23.js";

const texto_ingresado = document.getElementById("texto");
const texto_mostrar = document.getElementById("parrafo");

texto_ingresado.addEventListener("input", () => {
    mostrar_texto(texto_ingresado, texto_mostrar);
    if(texto_ingresado.value.length > 20) {
        cambiar_fondo(texto_mostrar);
    }
});