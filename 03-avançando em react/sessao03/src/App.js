
import { useState } from 'react';
import './App.css';

import Jazz from "./assets/jazz.jpg"
import ConditionalRender from './components/ConditionalRender';
import DestructuringProps from './components/DestructuringProps';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import TrabalhandoComProps from './components/TrabalhandoComProps';

function App() {
  const nome = "Pedro"
  const [ultimoNome] = useState("Alcantara")
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* imagem em public */}
      {/* <div>
        <img src="/zombie.png" alt="punk zombie" />
      </div> */}
      {/* imagem em assets */}
      {/* <div>
        <img src={Jazz} alt="" />
      </div> */}
      {/* <ManageData></ManageData>
      <ListRender></ListRender>   */}
      {/* conditional render */}
      {/* <ConditionalRender/> */}
      {/* Formas de se passar as props */}
      {/* <TrabalhandoComProps name={nome} lastName={ultimoNome} age={30} /> */}
      <DestructuringProps brand="BMW" km={89225} color="Azul" good={true}/>
      {/* reaproveitando dados de um componente */}
      <DestructuringProps brand="VW" km={123569} color="Branca" good={false}/>
      <DestructuringProps brand="FORD" km={3211} color="Vermelho" good={true}/>
      <DestructuringProps brand="MITSUBISHI" color="Cinza" km={11000} good={false}/>
    
    </div>
  );
}

export default App;
