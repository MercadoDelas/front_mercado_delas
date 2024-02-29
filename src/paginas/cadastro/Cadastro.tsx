import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../services/Service";
import "./Cadastro.css";
import banner from "../../assets/img/banner.png";

function Cadastro() {
  const navigate = useNavigate();

  const [confirmaSenha, setConfirmaSenha] = useState<string>("");

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  useEffect(() => {
    if (usuarioResposta.id !== 0) {
      back();
    }
  }, [usuarioResposta]);

  function back() {
    navigate("/login");
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      try {
        await cadastrarUsuario(
          `/usuarios/cadastrar`,
          usuario,
          setUsuarioResposta
        );
        alert("Usuário cadastrado com sucesso");
      } catch (error) {
        alert("Erro ao cadastrar o Usuário");
      }
    } else {
      alert("Dados inconsistentes. Verifique as informações de cadastro.");
      setUsuario({ ...usuario, senha: "" }); // Reinicia o campo de Senha
      setConfirmaSenha(""); // Reinicia o campo de Confirmar Senha
    }
  }

  return (
    <>
      <div
        className="bg-no-repeat bg-cover bg-center relative"
        style={{
          backgroundImage: banner ? `url(${banner})` : "",
        }}
      >
        <div className="absolute bg-gradient-to-b from-violet-500 to-violet-400 opacity-75 inset-0 z-0"></div>
        <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
          <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
            <div className="self-start hidden lg:flex flex-col  text-white">
              <img src="" className="mb-3" />
              <h1 className="mb-3 font-bold text-5xl">
                Oi! Bem-Vinde ao Mercado Delas{" "}
              </h1>
              <p className="pr-3">
              Empoderando mulheres, impulsinando sonhos:
              </p>
              <p className="pr-3">
              Seu mercado, sua liberdade
              </p>
            </div>
          </div>

          <form
            onSubmit={cadastrarNovoUsuario}
            className="flex justify-center self-center  z-10"
          >
            <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
              <div className="mb-4">
                <h3 className="font-semibold text-2xl text-gray-800">
                  Cadastre-se
                </h3>
              </div>
              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                    Usuario
                  </label>
                  <input
                    className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-violet-400"
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Nome"
                    value={usuario.nome}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      atualizarEstado(e)
                    }
                  />
                </div>

                <div className="space-y-2">
                  <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                    Usuario
                  </label>
                  <input
                    className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-violet-400"
                    type="text"
                    id="usuario"
                    name="usuario"
                    placeholder="Usuario"
                    value={usuario.usuario}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      atualizarEstado(e)
                    }
                  />
                </div>

                <div className="space-y-2">
                  <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                    Foto
                  </label>
                  <input
                    className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-violet-400"
                    type="text"
                    id="foto"
                    name="foto"
                    placeholder="Foto"
                    value={usuario.foto}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      atualizarEstado(e)
                    }
                  />
                </div>

                <div className="space-y-2">
                  <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                    Senha
                  </label>
                  <input
                    className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-violet-400"
                    type="password"
                    id="senha"
                    name="senha"
                    placeholder="Senha"
                    value={usuario.senha}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      atualizarEstado(e)
                    }
                  />
                </div>

                <div className="space-y-2">
                  <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                    Confirma Senha
                  </label>
                  <input
                    className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-violet-400"
                    type="password"
                    placeholder="Confirmar Senha"
                    value={confirmaSenha}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleConfirmarSenha(e)
                    }
                  />
                </div>

                <div style={{ display: "flex" }}>
                  <button
                    style={{ marginRight: "10px" }}
                    onClick={back}
                    className="w-full flex justify-center bg-violet-400  hover:bg-violet-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                  >
                    Cancelar
                  </button>

                  <button
                    type="submit"
                    className="w-full flex justify-center bg-violet-400  hover:bg-violet-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                  >
                    Cadastrar
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Cadastro;
