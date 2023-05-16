import { Routes, Route } from "react-router-dom";
import Homepage from "./Components/Pages/Homepage";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import "./App.css";
import Busbook from "./Components/Busbook";
import Signup from "./Components/Login/Signup";
import Login from "./Components/Login/Login";
import Services from "./Components/Pages/Services";
import Contact from "./Components/Pages/Contact";
import About from "./Components/About";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Status from "./Components/Status";
import Ticket from "./Components/ticket";
import Book from "./Components/book";
import Get from "./Components/getTicket";

function App() {
  return (
    <div>
      <ToastContainer position="top-center" />
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="home" element={<Home />} />
        <Route path="service" element={<Services />} />
        <Route path="busbook" element={<Busbook />} />
        <Route path="footer" element={<Footer />} />
        <Route path="login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/Status" element={<Status />} />
        <Route path= "/ticket" element={<Ticket />} />
        <Route path="/book" element={<Book />} />
        <Route path="/getTicket" element={<Get/>} />
      </Routes>
    </div>
  );
}

export default App;
