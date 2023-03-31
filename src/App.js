import { Routes,Route } from 'react-router-dom';
import Homepage from './Components/Pages/Homepage'
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import Footer from './Components/Footer';
import './App.css';
import Busbook from './Components/Busbook';

function App() {
  return (
    <div>
       <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='nav' element={<Navigation/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='busbook' element={<Busbook/>}/>
        <Route path='footer' element={<Footer/>}/>
       
      </Routes>
    </div>
  );
}

export default App;
