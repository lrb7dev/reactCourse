/* 
filter = metodo de array para filtrar os dados;
disponibiliza um array apenas com elementos que queremos;
existem varios metodos de array ES6 e esse é um deles! 
*/

//FILTRO ENTRE ELEMENTOS DE UM ARRAY
const arr = [1, 2, 3, 4 , 5, 6]

const highNumbers = arr.filter((n) => {
    if(n > 2) {
        return n
    }
})

console.log("n > 2 : " + highNumbers)

//outros exemplo
const users = [
    {name: 'Henry', available: true},
    {name: 'Carvil', available: false},
    {name: 'Thomas', available: true},
    {name: 'Patrick', available: true},
    {name: 'Diana', available: true},
    {name: 'Carl', available: false},
    {name: 'Rose', available: false},
]

//forma reduzida - neste caso
//checa se esta como 'true'
const availableUsers = users.filter((user) => user.available) // disponiveis
//checa se esta como 'false'
const notAvailableUsers = users.filter((user) => !user.available) // nao disponiveis
//usuarios disponiveis
console.log("disponiveis: " , availableUsers)
//usarios nao disponiveis
console.log('nao disponiveis: ' , notAvailableUsers)