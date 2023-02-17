const Events = () => {
   
    const handleMyEvent = (e) => {
        console.log(e)
        alert("Disparando o evento do clique no botão!")
    }
   
    return(
        <div>
            <div>
                <button onClick={handleMyEvent} >Clique Aqui!</button>
            </div>
        </div>
    )
}

export default Events