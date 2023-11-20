import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import "./styles/index.scss";
import Home from "./pages/Home";
import Dev from "./pages/Dev";
import Navbar from "./componentes/Navbar/Navbar";
import Navbar2 from "./componentes/Navbar/Navbar2";
import Footer from "./componentes/Footer/Footer";
import { WarningHeader } from "./componentes/WarningHeader/WarningHeader";
import './App.css'

function App() {
  return (
    <BrowserRouter>
        <WarningHeader />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dev" element={<Dev />} />
        </Routes>
        <Footer />
        <Navbar2 />
    </BrowserRouter>
  );
}

export default App;
