function Sorteio() {
    const numbers = [];

    while (numbers.length < 6) {
        const dezena = Math.floor(Math.random() * 60) + 1;
        if (!numbers.includes(dezena)) {
            numbers.push(dezena);
        }
    }
    return numbers;
}

const sorteio = Sorteio();
console.log(sorteio);
