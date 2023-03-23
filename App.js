import logo from "./logo.svg";
import "./App.css";

//import Form from "./components/form.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Navbar from "./components/navbar.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Service from "./components/Service.js";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Service" element={<Service />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
