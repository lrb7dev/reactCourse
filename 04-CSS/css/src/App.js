import './App.css';
import MyComponent from './MyComponent';

function App() {
  return (
    <div className="App">
    {/* CSS GLOBAL */}
      <h1>CSS no React</h1>
      {/* CSS de COMPONENT */}
      <MyComponent />
      <p>Este parágrafo é do App.js</p>
      <p className="my-paragraph">Parágrafo do App.js com estilo do MyComponent.css</p>
    </div>
  );
}

export default App;
