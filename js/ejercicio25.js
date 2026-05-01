import { cambiar_fondo, color_aleatorio } from "./funciones25.js";

const boton = document.getElementById("boton");

boton.addEventListener("click", () => {
    cambiar_fondo(color_aleatorio());
});