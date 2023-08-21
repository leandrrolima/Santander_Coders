// Função recursiva para encontrar o fatorial de um número
function factorialRecursion(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorialRecursion(n - 1);
    }
}

// Função sem recursão para encontrar o fatorial de um número
function factorialNonRecursion(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorialRecursion(4))
console.log(factorialNonRecursion(6))
