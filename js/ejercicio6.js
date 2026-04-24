const edades = [13, 22, 18, 30, 45, 25, 23, 33];
let total = 0;
for(let i=0; i < edades.length; i++){
    console.log(`Edad: ${edades[i]}`);
    total += edades[i];
}
const promedio = total / edades.length;
console.log(`Edad promedio: ${promedio.toFixed(2)}`);