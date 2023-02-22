//desestruturar 
const ChildrenContainer = ({ children, myFunction }) => {
  return (
    <div>
        <h2>Este é o título de container!</h2>
        {children}
        <button onClick={myFunction}>Clique aqui para executar a função!</button>
    </div>
  )
}

export default ChildrenContainer