import { cambiar_texto } from "./funciones19.js";

const boton = document.getElementById("boton");
const parrafo = document.getElementById("parrafo");
const texto = "Aprobe Programacion Visual";

boton.addEventListener("click", () => {
    cambiar_texto(parrafo, texto);
});