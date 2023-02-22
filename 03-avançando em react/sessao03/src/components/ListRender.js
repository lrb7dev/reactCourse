import {useState, setWeapons} from 'react'

const ListRender = () => {

    const [list] = useState(["Ranger", "Mage", "Paladin", "Berserker"])

    //um exemplo com objetos
    const [weapons, setWeapons] = useState([
        {id: 1, name: "Bow of Chaos", atk: 8.5},
        {id: 2, name: "Light Mace", atk: 8},
        {id: 3, name: "Magic Wand", atk: 8.5},
        {id: 4, name: "War Axe", atk: 9.5},
        {id: 5, name: "Crystal Lance", atk: 7.5},
        {id: 6, name: "Fire Staff", atk: 9},
        {id: 7, name: "Sword of Destiny", atk: 10},
    ])

    /* usando previous state */
    const deleteRandom = () => {
       //pegar um numero aleatorio do tamanho de [weapons]
        const randomNumber = Math.floor(Math.random() * 8)

        //manipulacao
        setWeapons((prevWeapons) => {
            console.log(prevWeapons)
            return prevWeapons.filter((weapon) => randomNumber !== weapon.id)
        })
    }

    return(
        <div>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            {/* exemplo com objetos usando as keys */}
            <ul>
                {weapons.map((weapons) => (
                    <li key={weapons.id}>Weapon: {weapons.name} | Atk: {weapons.atk}</li>
                ))}
            </ul>
            {/* usando Previous State */}
            <button onClick={deleteRandom}>Delete Random Weapon</button>
        </div>
    )
}

export default ListRender