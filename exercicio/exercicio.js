// function livro(nome, ano, autor) {
//   const nomeLivro = nome.toUpperCase();
//   const idade = 2023 - ano;
//   const frase = nome + ' por ' + autor;
//   const obj = {
//     nome: nomeLivro,
//     idade,
//     frase,
//   };

//   return obj;
// }

// function livro(nome, ano, autor) {
//   const obj = {
//     nome: nome.toUpperCase(),
//     idade: 2023 - ano,
//     frase: nome + ' por ' + autor,
//   };
//   return obj;
// }

// const livroRetorno = livro('O senhor dos aneis', 1954, 'Tolkien');
// console.log(livroRetorno.frase);

// const curso = {
//   nome: 'JavaScript',
//   completar() {
//     console.log(this.nome);
//   },
// };
// curso.completar();

// const ativar = document.querySelector('.ativar');

// /** @param {MouseEvent} event */
// function ativarAoClick(event) {
//   console.log(event.x);
// }

// ativar.addEventListener('click', ativarAoClick);
// console.log(ativar);

// const botao = document.querySelector('.botao');

// function mostrar() {
//   const texto = document.querySelector('.texto');
//   texto.classList.toggle('ativar');
// }

// botao.addEventListener('click', mostrar);

// function coordenadaMouse(event) {
//   const coodernada = {
//     x: event.x,
//     y: event.y,
//   };
//   console.log(coodernada);
// }

// window.addEventListener('mousemove', coordenadaMouse);

// const circulo = document.querySelector('#circulo');
// function seguirMouse(event) {
//   circulo.style.top = event.y + 'px';
//   circulo.style.left = event.x + 'px';
// }
// window.addEventListener('mousemove', seguirMouse);

// const botao = document.querySelector('button');

// function somar() {
//   const div = document.querySelector('div');
//   const total = Number(div.innerText) + 1;
//   if (total < 10) {
//     div.innerHTML = total;
//   } else {
//     console.log('nao eh possivel adicionar mais');
//   }
// }

// if (botao) {
//   botao.addEventListener('click', somar);
// }

// const lista = ['javascript', 'html', 'css', 'php'];
// const body = document.querySelector('body');

// function adicionarBody(item) {
//   body.innerHTML += '<li>' + item + '</li>';
// }

// lista.forEach(adicionarBody);

// const links = document.querySelectorAll('nav a');
// function logHref(item) {
//   const href = item.href;
//   console.log(href);
// }
// links.forEach(logHref);
