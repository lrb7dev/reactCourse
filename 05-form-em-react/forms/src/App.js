import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      {/*  1 - criacao de form */}
      {/*  6 - controlled inputs - exemplo: user={{name: "Pedro", email: "pedro@ordped.com"}} */}
      <MyForm user={{name: "Pedro", email: "pedro@ordped.com", bio: "Sou um programador", role:"admin"}} />


    </div>
  );
}

export default App;
