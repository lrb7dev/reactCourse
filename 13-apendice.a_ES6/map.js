//MAP: metodo array para modificar os dados do array;

const champions = [
    {name: 'Ashe', power: 7.5, lane: 'bottom'},
    {name: 'Zed', power: 8, lane: 'middle'},
    {name: 'Zilean', power: 7, lane: 'bottom/middle'},
    {name: 'Malzahar', power: 8, lane: 'middle'},
    {name: 'Maokai', power: 7.8, lane: 'top/bottom'},
    {name: 'Kled', power: 7.9, lane: 'top/jungle'},
    {name: 'Nasus', power: 7.7, lane: 'top/jungle'},
]

//mapear o array e adicionar novo elemento
champions.map((champion) => {
    if(champion.power >= 8) {
        champion.stronger = true
    } else {
        champion.stronger = false
    }
})

console.log('adicao de strong: ', champions)