/* 
CLASSES:
    -> fundamental para POO (Programacao Orientada a Objeto);
    -> Possui: CONSTRUCTOR, PROPRIEDADES e METODOS;
    --> Antes era baseada em funcoes (Constructor Functions)
*/

class Champion {
    //constructor
    constructor(name, lane) {
        this.name = name
        this.lane = lane
    }

    //metodo
    //melhor champion
    betterChampion() {
        let better

        if(this.name === "Kayn") {
            better = 'Melhor na Jungle'    
        } else {
            better = 'Outro'
        }
        
        return better
    }

}

const jg = new Champion('Kayn', 'Jungle')
const other = new Champion('Ashe', 'Bottom')

//com o nome Kayn
console.log(jg)
console.log(jg.name + " | " + jg.lane)
console.log(jg.betterChampion())
console.log(other)
console.log(other.name, " ? ", other.betterChampion())