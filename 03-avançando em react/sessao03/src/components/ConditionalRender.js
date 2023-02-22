import { useState } from "react"

//condicional simples
const ConditionalRender = () => {
    
    //se inverter para 'false' nao terá a exibição da resposta
    const [x] = useState(true)

    //usando ternario
    const [name, setName] = useState("Matheus") //ex: Matheus
    return (
    <div>
        <h1>Isso será exibido??</h1>
        {/* if com um condicao so - forma simples de usa-lo 'variavel + && + retorno' */}
        {x && <p>Se 'x' for 'true', sim!!!</p>}
        {/* 
            modo simples para usar condicao falsa:
            !variavel + && + retorno
        */}

        {/* USANDO TERNARIOS */}
        {name === "Maria" ? <p>O nome é {name}!</p> : <p>Nome não encontrado!</p>}
        <button onClick={() => setName("Maria")}>Clica Aqui</button>
    </div>
    )
}

export default ConditionalRender