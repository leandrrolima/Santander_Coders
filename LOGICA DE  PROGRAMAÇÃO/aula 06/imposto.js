function somaImposto(taxaImposto, custo) {
    return custo + (custo * taxaImposto / 100);
}

let custo = 1599.90;
let taxaImposto = 10;
let novoCusto = somaImposto(taxaImposto, custo);
let valorImposto = novoCusto - custo

let resultado = {
    valorInicial: `R$${custo.toFixed(2)}`,
    totalJuros: `${taxaImposto}% = R$${valorImposto}`,
    valorComImpostos: `R$${novoCusto.toFixed(2)}`
};

console.log(resultado)
