import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';
import {useState} from 'react'

function App() {

  /* inline style dinamico */
  const n = 15
  const [name] = useState("João")

  // classe dinâmica
  const redTitle = true

  return (
    <div className="App">
      {/* CSS GLOBAL */}
      <h1>CSS no React</h1>
      
      {/* CSS de COMPONENT */}
      <MyComponent />
      <p>Este parágrafo é do App.js</p>
      <p className="my-paragraph">Parágrafo do App.js com estilo do MyComponent.css</p>
      
      {/* inline CSS  -- DEVE SER EVITADO */}
      <p style={{ color: "white", backgroundColor:"Navy", padding: "10px" }} >Estilo inline CSS</p>
      
      {/* inline style dinâmico */}
      <h2 style={n < 10 ? {color: "#bbb131"} : {color: "#1515bb"}} >CSS Dinâmico inline</h2>
      <h2 style={n > 10 ? {color: "#bbb131"} : {color: "#1515bb"}} >CSS Dinâmico inline</h2>
      <h2 style={name === "João" ? {color: "#c1c"} : null} >CSS Dinâmico inline</h2>
      <h2 style={name !== "João" ? {color: "#c1c"} : {color: "#4646bb"}} >CSS Dinâmico inline</h2>
      
      {/* Classe Dinâmica */}
      <h3 className={redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica!</h3>
      <h3 className={!redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica!</h3>

      {/* CSS MODULE */}
      <Title/>

    </div>
  );
}

export default App;
