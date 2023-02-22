
import { useState } from 'react';
import './App.css';

import Jazz from "./assets/jazz.jpg"
import ConditionalRender from './components/ConditionalRender';
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
      <TrabalhandoComProps name={nome} lastName={ultimoNome} age={30} />
    </div>
  );
}

export default App;
