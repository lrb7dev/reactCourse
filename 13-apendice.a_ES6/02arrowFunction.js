/* 
Arrow Function: criar funcoes de forma mais simples;
Nao funciona como function em todos os aspectos; 
O 'this'  da arrow function é relacionado ao elemento pai de quem está executando;
*/

//function normal
const sum = function sum(a, b) {
    return a + b
}

//arrow function
//funcao anonima -> arrow function
//reduz linhas utilizadas, simplifica!
//o caso abaixo é para somente uma linha de código
const arrowSun = (a, b) => a + b

/* com mais de uma linha de código:
const arrowSun = (a, b) => {
    ... 
    ...
    ....
    return ...
}
*/

console.log("funcao normal: " + sum(2, 2) )
console.log("arrow function: " + arrowSun(2, 2))

//exemplo arrow function com mais linhas de codigo:
const umNome = (nome) => {
    if(nome ) {
        console.log("Olá, " + nome + "!" )
    } else {
        console.log("Olá!")
    }
}

//executando com e sem nome
umNome("Pedro")
umNome()

//exemplo de arrow function sem argumentos
const testeArrow = () => console.log("Arrow Function sem argumentos!")
testeArrow()

// EXEMPLO COM this

//objeto
const user = {
    name: 'Jonas',
    //metodo dentro do objeto
    sayUserName() {
        //acaba neste caso o pai sendo a WINDOW
        //para resolver teria que passar o var aqui: 
        var self = this /* <----- bind */
        setTimeout(function() {
            console.log(self)
            console.log('Username: ' + self.name)
        }, 500)
        //muitas linhas de codigo
        // abaixo: usando arrow function
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this)
            console.log('Username: ' + this.name)
        }, 700); // menos linhas de codigo
    }
}

user.sayUserName()
user.sayUserNameArrow()