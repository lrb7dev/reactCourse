const UserDetails = ({nome, idade, profissao}) => {
  return (
    <div>
        <ul>
            <li>Nome: {nome}</li>
            <li>idade: {idade}</li>
            <li>Profissão: {profissao}</li>
        </ul>
        {idade < 18 ? <p>Não pode tirar carteira de motorista!</p> : <p>Pode tirar carteira de motorista!</p>}
    </div>
  )
}

export default UserDetails