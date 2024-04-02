//classList

//Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém.

/*const menu = document.querySelector('.menu')

console.log(menu)

/*menu.className; // string
menu.classList; // lista de classes
menu.classList.add('ativo');
menu.classList.add('ativo', 'mobile'); // duas classes
menu.classList.remove('ativo');
menu.classList.toggle('ativo'); // adiciona/remove a classe
menu.classList.contains('ativo'); // true ou false
menu.classList.replace('ativo', 'inativo');*/

//attributes
//Retorna um array-like com os atributos do elemento.

/*const animais = document.querySelector('.animais');

console.log(animais.attributes); // retorna todos os atributos
console.log(animais.attributes[1]); // retorna o primeiro atributo
console.log(animais.attributes.class)
console.log(animais.attributes['animais'])

//GETATTRIBUTE E SETATTRIBUTE
//Métodos que retornam ou definem de acordo com o atributo selecionado

const img = document.querySelector('img');

console.log(img.getAttribute('src')); //o caminho da imagem

// valor do src
/*console.log(img.setAttribute('alt', 'Texto Alternativo')); // muda o alt

console.log(img.hasAttribute('id')); // true / false

console.log(img.removeAttribute('alt')); // remove o alt

console.log(img.hasAttributes()); // true / false se tem algum atributo

//SOMENTE LEITURA VS GRAVÁVEL
//Existem propriedades que não permitem a alteração de seus valores, essas são consideradas Read Only, ou seja, apenas leitura.

/*const animais = document.querySelector('.animais');

animais.className; // string com o nome das classes
animais.className = 'azul'; // substitui completamente a string
animais.className += ' vermelho'; // adiciona vermelho à string

animais.attributes = 'class="ativo"'; // não funciona, read-only

//Lembre-se de que podemos modificar o valor de uma propriedadeobjeto.propriedade = ''*/