
 import { Routes,Route } from 'react-router-dom';
import Homepage from './Components/Pages/Homepage'
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import Footer from './Components/Footer';
import './App.css';
import Busbook from './Components/Busbook';
import Signup from './Components/Login/Signup';
import Login from './Components/Login/Login';
import Services from './Components/Pages/Services';
import Contact from './Components/Pages/Contact';


function App() {
  return (
    <div>
      <Navigation/>
       <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='service' element={<Services/>}/>
        <Route path='busbook' element={<Busbook/>}/>
        <Route path='footer' element={<Footer/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
