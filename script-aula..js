const animais = document.getElementById('animais')
console.log(animais)

const gridSection = document.getElementsByClassName('grid-section')

console.log(gridSection.length)

const primeiraLi = document.querySelector('li');
console.log(primeiraLi)

const primeiraUl = document.querySelector('ul')
console.log(primeiraUl)

const Linksinternos = document.querySelector('[href^="#"]')
console.log(Linksinternos);

const animaisImg = document.querySelectorAll('.animais img')
console.log(animaisImg[2])

//HTMLCollection e NodeList :

const gridSectionHTML = document.getElementsByClassName('grid-section'); //atualiza automaticamente, caso o dev faça alguma atualizaçao.
const gridSectionNODE = document.querySelectorAll('.grid-section'); //nao atualiza automatimente. é estático.

console.log(gridSectionHTML);
console.log(gridSectionNODE);

// HTMLCollection e NodeList são array-like, parecem uma array, mas nao sao. o método de array forEach() por exemplo, existe apenas em NodeList.

gridSectionNODE.forEach(function(item, index){
  console.log(item)
})
const arrayGrid = Array.from(gridSectionHTML);
console.log(arrayGrid)

arrayGrid.forEach(function(item){
  console.log(item)
})
