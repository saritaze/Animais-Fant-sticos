// Retorne no console todas as imagens do site
const TodasImg = document.getElementsByTagName('img'); //ou queruSelectorAll
console.log(TodasImg);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const SomenteImg =  document.querySelectorAll('img[src^="img/imagem"]');
console.log(SomenteImg)

// Selecione todos os links internos (onde o href começa com #)
const linksIn = document.querySelector('[href^="#"]')
console.log(linksIn)

// Selecione o primeiro h2 dentro de .animais-descricao
const PrimeiroH2 = document.querySelector('.animais-descricao h2')
console.log(PrimeiroH2)

// Selecione o último p do site
const UltimoP = document.querySelector('footer p')
console.log(UltimoP)

//forma que o prof fez:

const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[--paragrafos.length]) // -1 dos itens do array
