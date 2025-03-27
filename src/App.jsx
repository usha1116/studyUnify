import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Contact from "./pages/Contact";
import Features from './pages/Features';
import Home from "./pages/Home";
function App() {
  return (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <div className="flex-grow">
      <Routes>
      <Route path="/" element={<Home />} /> 
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </div>
  )
}

export default App

