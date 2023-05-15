import Navigation from "../Navigation";
import Home from "../Home";
import Services from "./Services";
import Footer from "../Footer";
import Busbook from "../Busbook";
// import Book from "../book";

export default function Homepage() {
   return (
  <div>
    <Navigation />
    <Home />
    {/* <Book/> */}
    <Services />
    <Busbook />
    <Footer />
  </div>
);
   }

