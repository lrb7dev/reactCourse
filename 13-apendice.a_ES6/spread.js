/* 
SPREAD: 
    -> Pode ser utilizado em arrays e em objetos;
    -> Construir novos valores destes dados em outros arrays e/ou objetos;
    -> Unir varios arrays de maneira mais simples;
*/

//criando os arrays
const a1 = [0, 1, 2, 3]
const a2 = [4, 5 ,6]

console.log(`Array a1: [${a1}] & Array a2: [${a2}]`)

//usando SPREAD para criar um array unico
const a3 = [...a1, ...a2]

console.log(`Array 3 - uniao dos dois anteriores: [${a3}]`)

//exemplo com OBJETOS
const carName = {name: 'Astra'}
console.log(carName)
const carBrand = {brand: 'Chevrolet'}
console.log(carBrand)
const otherInfos = {price: 18999.99, km: 123523}
console.log(otherInfos)

//usando SPREAD
const car = {...carName, ...carBrand, ...otherInfos}
console.log(car)