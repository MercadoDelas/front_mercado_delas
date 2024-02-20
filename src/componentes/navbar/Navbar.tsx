import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
            <div className="w-full bg-violet-500 text-white flex justify-center py-4">
                <div className="container flex justify-between text-lg">
                    <div className="text-2xl font-bold uppercasse">Mercado Delas</div>

                        <div className="flex gap-4">
                            <Link to='/login' className="hover:underline">Login</Link>
                            <Link to='/home' className="hover:underline">Home</Link>
                            <div className="hover:underline">Produtos</div>
                            <div className="hover:underline">Categorias</div>
                            <div className="hover:underline">Cadastrar Categoria</div>
                            <div className="hover:underline">Perfil</div>
                            <div className="hover:underline">Sair</div>
                        </div>
                </div>
            </div>
        </>
    )
}
export default Navbar;