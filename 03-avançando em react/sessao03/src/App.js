
import { useState } from 'react';
import './App.css';

import Jazz from "./assets/jazz.jpg"
import ChangeMessageState from './components/ChangeMessageState';
import ChildrenContainer from './components/ChildrenContainer';
import ConditionalRender from './components/ConditionalRender';
import DestructuringProps from './components/DestructuringProps';
import FragmentExemplos from './components/FragmentExemplos';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import Message from './components/Message';
import TrabalhandoComProps from './components/TrabalhandoComProps';
import UserDetails from './components/UserDetails';

function App() {
  const nome = "Pedro"
  const [ultimoNome] = useState("Alcantara")

  //--- RENDERIZACAO DE LISTAS EM COMPONENTES
  const cars = [
    {id: 1, brand: "Ferrari", color: "Vermelho", good: true, km: 0},
    {id: 2, brand: "Lamborghini", color: "Amarelo", good: true, km: 0},
    {id: 3, brand: "Ford", color: "Vermelho", good: false, km: 13153},
  ]

  //FUNCOES EM PROPS
  function showMessage() {
    console.log("Evento do componente pai!")
  }

  //STATE LIFT
  const [message, setMessage] = useState("")
  const handleMessage = (msg) => {
    setMessage(msg)
  }

  //DESAFIO 04
  const pessoas = [
    {id:1, nome: "Pedro", idade: 15, profissao: "Sem Profissao"},
    {id:2, nome: "Ana", idade: 25, profissao: "Enfermeira"},
    {id:3, nome: "Caio", idade: 13, profissao: "Sem Profissao"},
    {id:4, nome: "Maria", idade: 40, profissao: "Médica"},
    {id:5, nome: "Jorge", idade: 19, profissao: "Gamer"},
  ]

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* imagem em public */}
      <div>
        <img src="/zombie.png" alt="punk zombie" />
      </div>
      {/* imagem em assets */}
      <div>
        <img src={Jazz} alt="" />
      </div>
      <div className='line'></div>
      <ManageData></ManageData>
      <ListRender></ListRender>  
      {/* conditional render */}
      <ConditionalRender/>
      <div className='line'></div>
      {/* Formas de se passar as props */}
      <TrabalhandoComProps name={nome} lastName={ultimoNome} age={30} />
      <DestructuringProps brand="BMW" km={89225} color="Azul" good={true}/>
      {/* reaproveitando dados de um componente */}
      <DestructuringProps brand="VW" km={123569} color="Branca" good={false}/>
      <DestructuringProps brand="FORD" km={3211} color="Vermelho" good={true}/>
      <DestructuringProps brand="MITSUBISHI" color="Cinza" km={11000} good={false}/>
      <div className='line'></div>
      {/*  LOOP EM ARRAY DE OBJETOS */}
      {/* RENDERIZACAO DE LISTA DE OUTROS COMPONENTES */}
      {cars.map((car) => (
        <DestructuringProps 
          key={car.id}
          brand={car.brand} 
          color={car.color} 
          good={car.good} 
          km={car.km} />
      ))}
      <div className='line'></div>
      {/* FRAGMENT */}
      <FragmentExemplos />
      <div className="line"></div>
      {/*  CHILDREN */}
      <ChildrenContainer >
        {/*  para resolver conflitos do componente filho ter elementos do componente pai - vide destructing no componente ChildrenContainer.js */}
        <p>Este é o conteúdo!</p>
      </ChildrenContainer>    
      <div className="line"></div>
      {/* FUNCOES EM PROPS */}
      {/* reutilizando o compoente ChildrenContainer para o exemplo*/}
      {/* showMessage esta sendo levada para ser usada em ChildrenContainer */}
      <ChildrenContainer myFunction = {showMessage} />
      <div className="line"></div>
      {/* STATE LIFT: quando o valor é elevado do componente filho para o componente pai */} 
      {/* {message} é o state criado la em cima */}
      <Message msg = {message}/>
      <ChangeMessageState handleMessage={handleMessage} /> 
      <div className="line"></div>
     {/* DESAFIO 04 mapeando e renderizando o array pessoas */}
     {pessoas.map((pessoa) => (
        <UserDetails
          key={pessoa.id} 
          nome = {pessoa.nome}
          idade = {pessoa.idade}
          profissao = {pessoa.profissao}
        />
      ))}

    </div>
  );
}

export default App;
