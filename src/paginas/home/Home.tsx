import Carousel from "../../componentes/carousel/Carousel";
import ListaProdutos from "../../componentes/produtos/ListaProduto";
import Titulo from "../../componentes/titulo/Titulo";

export default function Home() {
  return (
    <div>
      <Carousel />
      <Titulo/>
      <ListaProdutos />
    </div>
  );
}
