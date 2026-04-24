const impares = [];

for (let i = 1 ; i <= 19; i += 2) {
    impares.push(i);
}

console.log(`Los primeros 10 numeros impares son:${impares.join(",")}`);