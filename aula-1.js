//Transforme o objeto abaixo em uma Constructor Function

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    console.log((nome = " andou"));
  };
}

// crie 3 pessoas

const joao = new Pessoa("João", 20);
const maria = new Pessoa("Maria", 27);
const claudia = new Pessoa("Claudia", 55);

//Crie uma construction Function (Dom) para manipulação
//de listas de elementos do dom. Deve conter as seguintes propriedades:

//elements, retorna NodeList com os elementos selecionados
//addClass(classe), adiciona a classe a todos os elementos
//removeClass(classe), remove a classe a todos os elementos

function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor);
  this.element = elementList;
  this.addClass = function (classe) {
    elementList.forEach((element) => {
      element.classList.add(classe);
    });
  };

  this.removeClass = function (classe) {
    elementList.forEach((element) => {
      element.classList.remove(classe);
    });
  };

  const listaItens = new Dom ("li");
  const ul = new Dom("ul");

  //listaItens.addClass('ativar');
  //ul.addClass('ativar - ul');
}
