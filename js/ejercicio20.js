import {mostrarDatos} from "./funciones20.js";

const btn = document.querySelector("#btnMostrar");

btn.addEventListener("click", () => {

const nombre = document.querySelector("#campoNombre").value;
const apellido = document.querySelector("#campoApellido").value;
const libreta = document.querySelector("#campoLibreta").value;

const mensaje = mostrarDatos(nombre,apellido,libreta);

alert(mensaje)
});
