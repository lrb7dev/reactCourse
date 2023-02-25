import "./MyForm.css"
import {useState} from 'react'

const MyForm = () => {
  // 3 - gerenciamento de dados
  const [name, setName] = useState()
  const [email, setEmail] = useState()

  //tratamento
  const handleName = (e) => {
    /* console.log(e) //para ver todas as funcoes em ' event' procure a target - value */
    /* console.log("Mudou o nome!") */
    /* console.log(e.target.value) */
    setName(e.target.value)
  }

  //checar alteracao no valor do 'name' que esta no state
  console.log(name)
  console.log(email)

  return (
    <div>
        <form>
        <div>
          <label htmlFor="name">Nome: </label>
          <input type="text" name="name" placeholder="Digite seu nome"  onChange={handleName}/>
        </div>
          {/* 2 - label envolvendo input */}
        <label>
          <span>E-mail</span>
          {/* 4 - alteracao de state inline  */}
          <input type="email" name="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MyForm