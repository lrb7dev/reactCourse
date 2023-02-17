import './App.css';
import Challenge from './components/Challenge';
import Events from './components/Events';
import FirstCompoent from './components/FirstComponent';
import MyComponent from './components/MyComponent';
import TemplateExpressions from './components/TemplateExpressions';

function App() {
  return (
    <div className="App">
      {/* reaproveitando componentes */}
      <MyComponent></MyComponent>
        <h1>FUNDAMENTOS</h1>
        {/*First component --- comment */}
        <FirstCompoent></FirstCompoent>
        {/* TEMPLATE EXPRESSION EXAMPLE */}
        <TemplateExpressions></TemplateExpressions>
        {/* Eventos */}
      <Events></Events>  
      {/* desafio 02 */}
      <Challenge></Challenge>
    </div>
  );
}

export default App;
