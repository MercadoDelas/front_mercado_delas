import { Basket, FunnelSimple, House, User } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
            <div className="w-full bg-violet-500 text-white flex justify-center py-4">
                <div className="container flex justify-between text-lg">
                    <div className="text-2xl font-bold uppercasse">Mercado Delas</div>

                        <div className="flex gap-5">
                            <Link to='/home' className="hover:underline flex items-center gap-1"><House size={16} />Home</Link>
                            <div className="hover:underline flex items-center gap-1"><Basket size={16} />Produtos</div>
                            <div className="hover:underline flex items-center gap-1"><FunnelSimple size={16} />Categorias</div>
                            <Link to='/login' className="hover:underline flex items-center gap-1"> <User size={16} />Login</Link>
                        </div>
                </div>
            </div>
        </>
    )
}
export default Navbar;