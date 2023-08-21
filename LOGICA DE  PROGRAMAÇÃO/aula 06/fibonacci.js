// const fibonacci = (n) => {
//     let contagem = n <= 1 ? 0 : n === 2 ? 1 : undefined;
//     let a = 0;
//     let b = 1;

//     for (let i = 3; i <= n; i++) {
//         let c = a + b;
//         a = b;
//         b = c;
//     }
//     return b;
// }

// let n = 8
// let resultado = fibonacci(n);
// console.log(`O ${n}º termo da sequência de Fibonacci é ${resultado.join(', ')}.`)



const fibonacci = (n) => {
    if (n <= 1) return [0];
    let sequence = [0, 1];
    let a = 0;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        sequence.push(c);
        a = b;
        b = c;
    }
    return sequence;
}

let n = 10;
let sequence = fibonacci(n);
console.log(` ${sequence.join(', ')}.`);
