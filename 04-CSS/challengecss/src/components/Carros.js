import styles from './Carros.module.css'

const Carros = () => {

    const carDetails = [
        {id: 1, name: "VW", km: 1312},
        {id: 2, name: "Ford", km: 0},
        {id: 3, name: "Fiat", km: 57888},
        {id: 4, name: "Chevrolet", km: 313111},
    ]

    return (
    <div>
        {carDetails.map((car) => (
            <ul>
                <li className={styles.personalize}><span>Marca: </span>{car.name} |<span> Km: </span> {car.km}</li>
            </ul>
        ))}
    </div>
    )
}

export default Carros