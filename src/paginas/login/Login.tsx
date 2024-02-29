import { ChangeEvent, useContext, useEffect, useState } from "react";
import "./Login.css";

import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import UsuarioLogin from "../../models/UsuarioLogin";
import { RotatingLines } from "react-loader-spinner";
import banner from "../../assets/img/banner.png";

function Login() {
  const navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  const { usuario, handleLogin } = useContext(AuthContext);

  const { isLoading } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token !== "") {
      navigate("/home");
    }
  }, [usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
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
            className="flex justify-center self-center  z-10"
            onSubmit={login}
          >
            <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
              <div className="mb-4">
                <h3 className="font-semibold text-2xl text-gray-800">Logar </h3>
                <p className="text-gray-500">Please sign in to your account.</p>
              </div>
              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 tracking-wide">
                    Usuario
                  </label>
                  <input
                    id="usuario"
                    name="usuario"
                    className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-violet-400"
                    type=""
                    placeholder="Usuario"
                    value={usuarioLogin.usuario}
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
                    type="password"
                    id="senha"
                    name="senha"
                    placeholder="Senha"
                    value={usuarioLogin.senha}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      atualizarEstado(e)
                    }
                    className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-violet-400"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    Ainda não tem uma conta?{" "}
                    <Link
                      to="/cadastro"
                      className="text-violet-400 hover:text-violet-500"
                    >
                      Cadastre-se
                    </Link>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center bg-violet-400  hover:bg-violet-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                  >
                    {isLoading ? (
                      <RotatingLines
                        strokeColor="white"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="24"
                        visible={true}
                      />
                    ) : (
                      <span>Entrar</span>
                    )}
                  </button>
                </div>
              </div>
              <div className="pt-5 text-center text-gray-400 text-xs">
                <span>
                  Copyright © 2024
                  <a
                    href="/login"
                    title="Ajimon"
                    className="text-green hover:text-violet-500 "
                  >
                    Mercado Delas
                  </a>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
