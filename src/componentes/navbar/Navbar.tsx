import {
  Basket,
  FunnelSimple,
  GenderFemale,
  PaperPlaneRight,
  PlusCircle,
  SignIn,
  SignOut,
} from "@phosphor-icons/react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { toastAlerta } from "../../utils/toastAlerta";

function Navbar() {
  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    toastAlerta("Usuário deslogado com sucesso", "sucesso");
    navigate("/login");
  }

  let navbarComponent;

  if (usuario.token !== "") {
    navbarComponent = (
      <div className="w-full bg-violet-500 text-white flex justify-center py-2">
        <div className="container flex justify-between text-lg">
          <div className="text-2xl font-bold uppercasse">
            <Link to="/home">
              <img
                className="h-12"
                src="https://github.com/IgorCavalcantiMoura/Procenge-Sistema-Escola/blob/main/Mercado-delas_igor.gif?raw=true"
                alt=""
              />
            </Link>
          </div>
          <div className="flex gap-5">
            <Link
              to="/produtos"
              className="hover:scale-110 flex items-center gap-1"
            >
              <Basket size={16} />
              Produtos
            </Link>
            <Link
              to="/cadastroProduto"
              className="hover:scale-110 flex items-center gap-1"
            >
              <PlusCircle size={16} />
              Novo Produto
            </Link>
            <Link
              to="/categorias"
              className="hover:scale-110 flex items-center gap-1"
            >
              <FunnelSimple size={16} /> Categorias
            </Link>
            <Link
              to="/cadastroCategoria"
              className="hover:scale-110 flex items-center gap-1"
            >
              <PlusCircle size={16} /> Nova Categoria
            </Link>
            <Link
              to="/sobre"
              className="hover:scale-110 flex items-center gap-1"
            >
              {" "}
              <GenderFemale size={16} />
              Sobre Nós
            </Link>
            <Link
              to="/contato"
              className="hover:scale-110 flex items-center gap-1"
            >
              {" "}
              <PaperPlaneRight size={16} />
              Contato
            </Link>
            <Link
              to=""
              onClick={logout}
              className="hover:scale-110 flex items-center gap-1"
            >
              {" "}
              <SignOut size={16} />
              Sair
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    // Se o usuário não estiver autenticado, mostrar apenas o link de login
    navbarComponent = (
      <div className="w-full bg-violet-500 text-white flex justify-center py-2">
        <div className="container flex justify-between text-lg">
          <div className="text-2xl font-bold uppercasse">
            <Link to="/home">
              <img
                className="h-12"
                src="https://github.com/IgorCavalcantiMoura/Procenge-Sistema-Escola/blob/main/Mercado-delas_igor.gif?raw=true"
                alt=""
              />
            </Link>
          </div>
          <div className="flex gap-5">
            <Link
              to="/login"
              className="hover:scale-110 flex items-center gap-1"
            >
              <SignIn size={16} />Login
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <>{navbarComponent}</>;
}

export default Navbar;
