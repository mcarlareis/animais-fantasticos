// //insertBefore animais, titulont.querySelinsertBefore;animais, titulonst animaisLista = document.querySelector('.animais-descricao';
// // consoinsertBeforenanimais, tituloL);
// // console.log(h1.outerHTML);

// // h1.outerHTML = '<p>Novo Titulo</p>';
// //console.log(animaisLista.innerHTML);

// const lista = document.querySelector('.animais-lista');

// // console.log (lista.previousElementSibling);
// // console.log (lista.children[--lista.children.length]);
// // console.log (lista.querySelector('li:last-child'));

// console.log(lista.childNode);


// const animais = document.querySelector('.animais');
// const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo');
// const mapa = document.querySelector('.mapa');


// contato.replaceChild(lista, titulo);

// // contato.insertBefore(animais, titulo);

// const novoh1 = document.createElement('h1');
// novoh1.innerText = 'Novo Titulo';
// novoh1.classList.add('titulo');

// mapa.appendChild(novoh1);

// console.log(novoh1);

const h1 = document.querySelector('h1');
const faq = document.querySelector('.faq');

const cloneH1 = h1.cloneNode(true);

faq.appendChild(h1);

const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');
const animais = document.querySelector('.animais');
const cloneMenu = menu.cloneNode(true);

copy.appendChild(cloneMenu);

const faq = document.querySelector('.faq');
const primeiroDt = faq.querySelector ('dt');
const proximoDd = primeiroDt.nextElementSibling;

//console.log(proximoDd);

faq.innerHTML = animais.innerHTML;
