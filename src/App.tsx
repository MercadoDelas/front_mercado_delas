import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./paginas/home/Home";
import Contato from "./paginas/contato/Contato";
import Sobre from "./paginas/sobre/Sobre";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
