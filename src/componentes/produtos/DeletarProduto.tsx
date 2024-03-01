import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import Produto from '../../models/Produto';
import { buscar, deletar } from '../../services/Service';
import { toastAlerta } from '../../utils/toastAlerta';

function DeletarProduto() {
  const [produto, setProduto] = useState<Produto>({} as Produto)

  let navigate = useNavigate()

  const { id } = useParams<{ id: string }>()

  const { usuario, handleLogout } = useContext(AuthContext)
  const token = usuario.token

  async function buscarPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto, {
        headers: {
          'Authorization': token
        }
      })
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente', 'info')
        handleLogout()
      }
    }
  }
 
  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado', 'info')
      navigate('/login')
    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  function retornar() {
    navigate("/produtos")
  }

  async function deletarProduto() {
    try {
      await deletar(`/produtos/${id}`, {
        headers: {
          'Authorization': token
        }
      })

      toastAlerta('Produto apagado com sucesso', 'sucesso')

    } catch (error) {
      toastAlerta('Erro ao apagar o Produto', 'erro')
    }

    retornar()
  }
  return (
    <div className='container w-1/3 mx-auto'>
      <h1 className='text-4xl text-center my-4'>Deletar produto</h1>

      <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar o produto a seguir?</p>

      <div className="relative flex w-96 flex-col rounded-xl bg-violet-200 bg-clip-border text-gray-700 shadow-md flex justify-center mx-auto">
  <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
    <img
      src={produto.foto}
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
    <div className="mb-2 flex items-center justify-between">
      <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
      {produto.nome}
      </p>
      <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">R$
      {produto.preco}
      </p>
    </div>
    <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
    {produto.descricao}
    </p>
  </div>
  <div className="p-6 pt-0">
    <button
      className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={retornar}>Não</button>
  </div>
  <div className="p-6 pt-0">
    <button 
      className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={deletarProduto}>Sim</button>
  </div>
</div>
    </div>
  )
}

export default DeletarProduto