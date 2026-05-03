export const mostrarSeleccion=(valor)=>{
const resultado= document.querySelector("#resultado");
resultado.textContent=`seleccionates: ${valor}`;
console.log(`seleccionaste ${valor}`);
};