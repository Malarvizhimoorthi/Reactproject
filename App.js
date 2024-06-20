import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './router/Navbar';
import Home from './router/Home';
import About from './router/About';
import Services from './router/Services';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
     <Route path="/home" element={<Home/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/services" element={<Services/>}/>
     </Routes> 
    
    </div>
  );
}

export default App;

