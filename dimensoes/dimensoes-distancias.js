//ALTURA E LARGURA
//Estas são propriedades e métodos dos objetos Elemente HTMLElement, a maioria delas são Read Only

const listaAnimais= document.querySelector('.animais-lista');

console.log(listaAnimais.clientHeight); // height + padding
//section.offsetHeight; // height + padding + border
//section.scrollHeight; // height total, mesmo dentro de scroll

const height = listaAnimais.scrollHeight; //OU WIDTH
console.log(height)
const animaisTop = listaAnimais.offsetTop; //Distância entre o topo do elemento e o topo da página
console.log(animaisTop)

const primeiroh2 = document.querySelector('h2')
const h2left = primeiroh2.offsetTop;
console.log(h2left)

//GETBOUNDINGCLIENTRECT()
//Método que retorna um objeto com valores de largura, altura, distâncias do elemento e mais.

const rect = primeiroh2.getBoundingClientRect();
console.log(rect.top)

//WINDOW

console.log(
  window.innerWidth, // width do janela
  window.outerWidth, // soma dev tools também
  window.innerHeight, // height do janela
  window.outerHeight, // soma a barra de endereço
  window.pageYOffset, // Distância total do scroll vertical
  window.pageXOffset // Distância total do scroll horizontal
)

//MATCHMEDIA();
//Utilize uma media-querie como no CSS para verificar a largura do navegador

const small = window.matchMedia('(max-width: 600px)');

if(small.matches) {
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 600px')
}

//DICA
//Selecione o elemento no inspetor (dom)

//Abra o console e digite $0 para selecionar o mesmo

//Os elementos selecionados anteriormente são $1, $2 ...