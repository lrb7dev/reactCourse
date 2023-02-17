const Challenge = () => {
    
    const numb1 = 3
    const numb2 = 6
    
    const somar = () => {
        return console.log(`${numb1} + ${numb2} =   ${numb1 + numb2} `)
    } 

    return(
        <div>
            <h1 className="color-02">DESAFIO</h1>
            <p>1º número: {numb1}</p>
            <p>2º número: {numb2}</p>
            <button onClick = {somar} >Somar</button>
        </div>
    )
}

export default Challenge