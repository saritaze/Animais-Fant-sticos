// Adicione a classe ativo a todos os itens do menu
const addAtivo = document.querySelectorAll('.menu a')

addAtivo.forEach((item) => {
  item.classList.add('ativo') //adicionou a classe 'ativo'
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
addAtivo.forEach((item) => {
  item.classList.remove('ativo') // removeu de todos
});
addAtivo[0].classList.add('ativo'); //adicionou so ao primeiro item

// Verifique se as imagens possuem o atributo alt

const imgs = document.querySelectorAll('img');

imgs.forEach((img) => {
  const possuiAtributo= img.hasAttribute('alt')
  console.log(img, possuiAtributo);

}) 

// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://www.google.com/')

console.log(link);


