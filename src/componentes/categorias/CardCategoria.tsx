import { Link } from "react-router-dom";
import Categoria from "../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <>
      <div className="mt-10 mx-auto">
        <div className="w-96 inline-flex flex-col space-y-2 items-center justify-end flex-1 h-full p-4 bg-violet-500 rounded-xl hover:scale-105 hover:bg-violet-700">
          <p className="w-full text-2xl font-semibold text-white">
            {categoria.tipo}
          </p>
          <p className="w-full pb-8 text-sm tracking-wide leading-tight text-white">
            {categoria.descricao}
          </p>
          <div className="rounded flex items-end justify-end">
            {/* <div className="opacity-95 border rounded-lg border-white px-4 mx-2 mr-4w-20"> */}
              <Link
                to={`/editarCategoria/${categoria.id}`}
                className="m-auto inset-0 text-sm font-medium leading-normal text-center text-white py-2 opacity-95 border rounded-lg border-white  w-20 mx-2 hover:bg-white hover:text-violet-700"
              >
                Editar
              </Link>
            {/* </div> */}
            {/* <div className="opacity-95 border rounded-lg border-white px-4 w-20 mx-2 mr-4w-20 hover:bg-white hover:text-violet-700"> */}
              <Link
                to={`/deletarCategoria/${categoria.id}`}
                className="m-auto inset-0 text-sm font-medium leading-normal text-center text-white py-2 opacity-95 border rounded-lg border-white  w-20 mx-2 hover:bg-white hover:text-violet-700"
              >
                Deletar
              </Link>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default CardCategoria;
