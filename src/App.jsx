import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import "./styles/index.scss";
import "./App.css";
import Home from "./pages/Home";
import Dev from "./pages/Dev";
import { WarningHeader } from "./componentes/WarningHeader/WarningHeader";
import Navbar from "./componentes/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <WarningHeader />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dev" element={<Dev />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
