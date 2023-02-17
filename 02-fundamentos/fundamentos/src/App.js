import './App.css';
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
    </div>
  );
}

export default App;
