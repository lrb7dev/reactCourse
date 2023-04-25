import './App.css';

import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

//COMPONENTS
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//PAGES
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <div className="container">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
