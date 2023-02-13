//var, let & const 

//diferenças entre var e let
var a = 3
var b = 2

console.log("valor de a: " + a)

if(b < 3) {
    var a = 6
    console.log ("recebendo o valor dentro do escopo: "+ a)
}

console.log("sofre alteracao a variavel por estar global: "+ a)

//caso com let - sofre alteracao so dentro do escopo

let c = 3
let d = 2

console.log("antes do escopo de if(): " + c)

if(d < 3) {
    let c = 6
    console.log ("alteracao somente no escopo: " +  c)
}

console.log("Fora do escopo de if(): " + c)

//exmeplo com const 
//adendo: a const nao pode ser redefinido o valor
const name = "Cezar"
console.log("const - fora do escopo: " + name)

function logName() {
    const name = "Augusto"
    console.log("dentro do escopo: " + name)
}

logName()

console.log("Fora do escopo novamente: " + name)