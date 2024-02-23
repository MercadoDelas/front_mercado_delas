// Importando os Componentes Swiper React

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Importando os estilos Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import bannerCarrousel from "../../assets/img/editadoTeste.png";

// Importando SEU CSS
import "./carousel.css";

function Carousel() {
  const items = [
    {
      img: "https://www.riotgames.com/darkroom/1440/b540da2b9afe5ec83e842a2d84f6dbb1:e95535ecd35e48592908762c9353926a/arcane-final-poster-16x9-no-text-no-border.jpg",
    },
    {
      img: bannerCarrousel,
    },
  ];

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {items.map((item) => (
          <SwiperSlide>
            <img src={item.img} alt="Imagem" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
export default Carousel;
