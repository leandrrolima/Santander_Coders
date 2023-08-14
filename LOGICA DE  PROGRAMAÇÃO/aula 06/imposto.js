function somaImposto(taxaImposto, custo) {
    return custo + (custo * taxaImposto / 100);
}

let custo = 1599.90;
let taxaImposto = 10;
let novoCusto = somaImposto(taxaImposto, custo);


console.log(`O valor inicial era: ${custo.toFixed(2)} e o valor com os impostos é de: ${novoCusto.toFixed(2)}`)
