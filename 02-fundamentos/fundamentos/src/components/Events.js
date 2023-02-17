const Events = () => {
   
    const handleMyEvent = (event) => {
        console.log("Disparando o evento do clique no botão!")
        console.log(event) //geralmente utiliza-se a letra 'e'
    }
   
    //renderizar algo
    const renderSomething = (x) => {
        if(x) {
            return <h1>Renderizando H1</h1>
        } else {
            return <h2>Renderizando H2</h2>
        }
    }

    return(
        <div className="buttons">
            <div>
                <button onClick={handleMyEvent}>Clique Aqui!</button>
            </div>
            <div>
                <button onClick={() => {console.log("Clicou!!!") }} >Clique aqui também!</button>
            </div>
            <div>
                <button onClick={() => {
                   alert("Dessa forma aqui não é indicada a utilização por complicar o código!")
                }} >Clique aqui também!</button>
            </div>
            <div>
                {/* renderizando com valor 'true' */}
                {renderSomething(true)}
                {/*  renderizando com o valor 'false' */}
                {renderSomething(false)}
            </div>
        </div>
    )
}

export default Events