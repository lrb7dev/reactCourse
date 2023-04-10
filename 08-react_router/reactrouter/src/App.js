import './App.css';

//1-config react router
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//components
import Navbar from './components/Navbar';

//pages
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/about" element={<About /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
