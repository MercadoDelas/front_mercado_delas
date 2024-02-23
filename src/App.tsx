import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./paginas/home/Home";
import Contato from "./paginas/contato/Contato";
import Sobre from "./paginas/sobre/Sobre";
import Teste from "./paginas/teste/Teste";
import Login from "./paginas/login/Login";
import Navbar from "./componentes/navbar/Navbar";
import Footer from "./componentes/footer/Footer";
import Cadastro from "./paginas/cadastro/Cadastro";
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
      <Navbar/>
        <div className="min-h-[80vh]">
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Cadastro />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/teste" element={<Teste />} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
