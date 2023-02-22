
import './App.css';

import Jazz from "./assets/jazz.jpg"
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';

function App() {
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
      <ConditionalRender/>
    </div>
  );
}

export default App;
