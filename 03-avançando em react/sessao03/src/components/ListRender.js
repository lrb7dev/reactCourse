import {useState} from 'react'

const ListRender = () => {

    const [list] = useState(["Ranger", "Mage", "Paladin", "Berserker"])

    //um exemplo com objetos
    const [weapons] = useState([
        {id: 1, name: "Bow of Chaos", atk: 8.5},
        {id: 2, name: "Light Mace", atk: 8},
        {id: 3, name: "Magic Wand", atk: 8.5},
        {id: 4, name: "War Axe", atk: 9.5},
    ])

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
        </div>
    )
}

export default ListRender