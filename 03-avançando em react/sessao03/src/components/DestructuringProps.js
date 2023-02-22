//Usando Destructuring em Props
const DestructuringProps = ({ brand, km, color, good }) => {
  return (
    <div>
        <h2>Detalhes do carro</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
        </ul>
        {/* adicionando  aos props com 'true' */}
        {good && <span>Em bom estado de conservação!</span>}
    </div>
  )
}

export default DestructuringProps