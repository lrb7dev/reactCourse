/* 
DESTRUCTURING:
    -> recurso que pode ser utilizado em ARRAYS e OBJETOS;
    -> Transformar (extrair) um dos itens de um dos dados em variaveis;
    -> Simplificar declaracao de 'n' variaveis para 1 linha.
*/

//criando o array
const weapons = ['Sword', 'Bow', 'Wand', 'Spellbook']

//fazendo um destructuring...
const [knight, ranger, mage, cleric] = weapons

console.log(`Knight: ${knight} | Ranger: ${ranger} | Mage: ${mage} | Cleric: ${cleric}`)

//outro exemplo
const productDetails = {
    name: "Gamer PC",
    price: 999.99,
    category: "I.T.",
    color: "Black",
    gamer: true
}

//usando destructiring para sobreescrever
const {name: productName, price, category: productCategory, color, gamer: isPCGamer} = productDetails

//apenas uma ilustracao utilizando funcoes dentro da template literals tbm
const pcGamer = (pc) => {
    if(pc === true) {
       return  'Sim!'
    }
}

console.log(`O nome do produto é ${productName}, custa R$${price}, pertence a categoria de ${productCategory}, cor: ${color} e é um PC GAMER? ${pcGamer(isPCGamer)}`)