import Home from "./components/Home";
import About from "./components/About";
import "./App.css";
import Contact from "./components/Contact";
import Services from "./components/Services";
import { BrowserRouter, Routes , Route , Link } from "react-router-dom";
import Nav from "./components/Nav";
import Feedback from "./components/Feedback";

const App = () => {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/feedback" element={<Feedback />}></Route>


    </Routes>
    </BrowserRouter>
  );
}

export default App;
