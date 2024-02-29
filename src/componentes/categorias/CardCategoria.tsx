
import { Link } from 'react-router-dom'
import Categoria from '../../models/Categoria'




// interface CardCategoriaProps {
//   categoria : Categoria
// }

function CardCategoria() {
  return (
    <>
  
<div className="h-screen max-w-2xl mx-auto mt-24 space-y-20">
  <div className="max-w-screen-md md:w-3/4 mx-auto">
    <div className="inline-flex flex-col space-y-2 items-center justify-end flex-1 h-full p-4 bg-violet-500 rounded-xl">
      <p className="w-full text-2xl font-semibold text-white">CATEGORIA</p>
      <p className="w-full pb-8 text-sm tracking-wide leading-tight text-white">ddcsxzdxszfcdx</p>
      <div className="rounded mr-auto flex items-center justify-center">
        <div className="opacity-95 border rounded-lg border-white px-4 mr-4 w-20">
          <Link to={`/editarCategoria/id`} className="m-auto inset-0 text-sm font-medium leading-normal text-center text-white py-2 ">Editar</Link>
        </div>
        <div className="opacity-95 border rounded-lg border-white px-4 w-20">
          <Link to={`/deletarCategoria/id`} className="m-auto inset-0 text-sm font-medium leading-normal text-center text-white py-2">Deletar</Link>
        </div>
      </div>
    </div>
  </div>

  
</div>
    </>
    
  )
}

export default CardCategoria