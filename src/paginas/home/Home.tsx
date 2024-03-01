import Carousel from "../../componentes/carousel/Carousel";
import ListaProdutos from "../../componentes/produtos/ListaProduto";

export default function Home() {
  return (
    <div>
      <Carousel />
      {/* <h1>Home</h1> */}
      <ListaProdutos />
    </div>
  );
}
