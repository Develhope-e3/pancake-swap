import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import "./styles/index.scss";
import Home from "./pages/Home.js";
import Dev from "./pages/Dev.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dev" element={<Dev />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
