
const prataJson = [
  {
    id: 1,
    name: 'Anel Cravejado',
    img: 'assets/Imagens/anel-v.jpg',
    price: [80.00],
    sizes: ' Nº16.'
  },
  {
    id: 2,
    name: 'Pulseira elo corações',
    img: 'assets/Imagens/elo.jpg',
    price: [45.00],
    sizes: '18cm.'
  },
  {
    id: 3,
    name: 'Pulseira pandora',
    img: 'assets/Imagens/pulseira-pandora.jpg',
    price: [300.00],
    sizes: ' 19cm.'
  },
  {
    id: 4,
    name: 'Corrente rabo de rato',
    img: 'assets/Imagens/rabo-de-rato-catalogo.jpg',
    price: [150.00],
    sizes: '60cm.'
  },
  {
    id: 5,
    name: 'Bracelete love',
    img: 'assets/Imagens/bracelete-catalogo.jpg',
    price: [45.00],
    sizes: '17cm.'
  },
  {
    id: 6,
    name: 'Anel falange corações',
    img: 'assets/Imagens/anel-catalogo.jpg',
    price: [50.00],
    sizes: 'Regulável.'
  }

];

// Classe Prata
class Prata {
  constructor(id, name, img, price, sizes) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.price = price;
    this.sizes = sizes;
  }
}



// Classe Catálogo
class Catalogo {
  constructor() {
    this.pratas = [];
  }

  static totalPratas(catalogo) {
    return catalogo.pratas.length;
  }

  // Método para adicionar uma prata ao catálogo (Create)
  adicionarPrata(prata) {
    this.pratas.push(prata);
    this.atualizarTabela();
  }


  // Método para obter uma prata do catálogo pelo ID (Read)
  obterPrata(id) {
    return this.pratas.find(prata => prata.id === id);
  }


  // Método para atualizar uma prata do catálogo pelo ID (Update)
  atualizarPrata(id, data) {
    const prata = this.pratas.find(prata => prata.id === id);
    if (prata) {
      Object.assign(prata, data);
      this.atualizarTabela();
    }
  }



  // Método para remover uma prata do catálogo pelo ID (Delete)
  removerPrata(id) {
    this.pratas = this.pratas.filter(prata => prata.id !== id);
    this.atualizarTabela();
  }


  // Método para atualizar a tabela na página
  atualizarTabela() {
    const catalogoElement = document.getElementById('catalogo');
    const rows = catalogoElement.getElementsByTagName('tr');
    for (let i = rows.length - 1; i > 0; i--) {
      catalogoElement.deleteRow(i);
    }
    this.pratas.forEach(prata => {
      const row = catalogoElement.insertRow(-1);
      row.insertCell(0).innerHTML = prata.id;
      row.insertCell(1).innerHTML = prata.name;
      row.insertCell(2).innerHTML = `<img src="${prata.img}" width="100" style="border-radius: 10px;">`;
      row.insertCell(3).innerHTML = `R$${prata.price}`;
      row.insertCell(4).innerHTML = prata.sizes;
      row.insertCell(5).innerHTML = `<button class="oauthButton" onclick="preencherFormulario(${prata.id})">Editar</button> <button class="oauthButton" onclick="removerPrata(${prata.id})">Remover</button>`;
    });
  }
}


// Criar um novo catálogo
const catalogo = new Catalogo();


// Adicionar pratas ao catálogo a partir do JSON
const pratas = prataJson.map(prataData => new Prata(...Object.values(prataData)));
pratas.forEach(prata => catalogo.adicionarPrata(prata));


// Usar o método estático totalPratas para calcular o número total de pratas no catálogo
const totalDePratas = Catalogo.totalPratas(catalogo);
console.log(`Total de pratas no catálogo: ${totalDePratas}`);


// Função para preencher o formulário de atualização com os dados de uma prata
function preencherFormulario(id) {
  const prata = catalogo.obterPrata(id);
  if (prata) {
    document.getElementById('update-id').value = prata.id;
    document.getElementById('update-name').value = prata.name;
    document.getElementById('update-img').value = prata.img;
    document.getElementById('update-price').value = prata.price[0];
    document.getElementById('update-sizes').value = prata.sizes;
    document.getElementById('update-form').scrollIntoView();
  }
}


// Função para remover uma prata pelo ID
function removerPrata(id) {
  if (confirm(`Tem certeza de que deseja remover a jóia com ID ${id}?`)) {
    catalogo.removerPrata(id);
  }
}


// Adicionar evento de submit ao formulário de adição
document.getElementById('add-form').addEventListener('submit', event => {
  event.preventDefault();
  const id = catalogo.pratas.length + 1;
  const name = document.getElementById('name').value;
  const img = document.getElementById('img').value;
  const price = [parseFloat(document.getElementById('price').value)];
  const sizes = document.getElementById('sizes').value;
  const prata = new Prata(id, name, img, price, sizes);
  catalogo.adicionarPrata(prata);
});


// Adicionar evento de submit ao formulário de atualização
document.getElementById('update-form').addEventListener('submit', event => {
  event.preventDefault();
  const id = parseInt(document.getElementById('update-id').value);
  const name = document.getElementById('update-name').value;
  const img = document.getElementById('update-img').value;
  const price = [parseFloat(document.getElementById('update-price').value)];
  const sizes = document.getElementById('update-sizes').value;
  catalogo.atualizarPrata(id, { name, img, price, sizes });
});

document.getElementById('clear-button').addEventListener('click', () => {
  document.getElementById('name').value = '';
  document.getElementById('img').value = '';
  document.getElementById('price').value = '';
  document.getElementById('sizes').value = '';
})

