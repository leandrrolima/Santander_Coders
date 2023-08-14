let List = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let NPares = [];
let NImpares = [];

for (let i = 0; i < List.length; i++) {
    if (List[i] % 2 === 0) {
        NPares.push(List[i]);
    } else {
        NImpares.push(List[i]);
    }
}

console.log(`Lista -> ${List}`)
console.log(`Pares -> ${NPares}`);
console.log(`Impares -> ${NImpares}`);

