import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Categoria from "../../models/Categoria";
import { AuthContext } from "../../contexts/AuthContext";
import { buscar, deletar } from "../../services/Service";

function DeletarCategoria() {
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('O token expirou, favor logar novamente')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/categorias")
    }

    async function deletarCategoria() {
        try {
            await deletar(`/categorias/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            alert('Categoria apagada com sucesso')

        } catch (error) {
            alert('Erro ao apagar a Categoria')
        }

        retornar()
    }

    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar categoria</h1>

            <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar a categoria a seguir?</p>

            <div className=" h-screen max-w-2xl mx-auto mt-24 space-y-20">
                <div className=" md:w-3/4 mx-auto">
                    <div className="w-96 inline-flex flex-col space-y-2 items-center justify-end flex-1 h-full p-4 bg-violet-500 rounded-xl">
                        <p className="w-full text-2xl font-semibold text-white">{categoria.tipo}</p>
                        <p className="w-full pb-8 text-sm tracking-wide leading-tight text-white">{categoria.descricao}</p>
                        <div className="rounded mr-auto flex items-center justify-center">
                            <div className="opacity-95 border rounded-lg border-white px-4 mr-4 w-20">
                                <Link to={`/editarCategoria/${categoria.id}`} className="m-auto inset-0 text-sm font-medium leading-normal text-center text-white py-2 " onClick={retornar}>Não</Link>
                            </div>
                            <div className="opacity-95 border rounded-lg border-white px-4 w-20">
                                <Link to={`/deletarCategoria/${categoria.id}`} className="m-auto inset-0 text-sm font-medium leading-normal text-center text-white py-2" onClick={deletarCategoria}>Sim</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeletarCategoria