const nombres = ["Maximiliano","Erick","Franco","Damian", "Gonzalo","Daniel"];

console.log("Los nombres del array son:")
for(let i = 0; i < nombres.length; i++) {
console.log(nombres[i]);
}

let nombreMaslargo = nombres[0];
for(let i = 1; i < nombres.length; i++) {
    if(nombres[i].length > nombreMaslargo.length){
        nombreMaslargo = nombres[i];
    }
}
console.log(`El nombre mas largo es: ${nombreMaslargo}`);