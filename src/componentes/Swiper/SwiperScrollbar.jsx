import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination} from "swiper/modules";
import Slide from "./Slides/Slide";
import "./SwiperScrollbar.scss";
import { dataSwiper } from "../../data/dataSwiper";

export default function SwiperScrollbar() {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,

        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        spaceBetween={50}
        modules={[Pagination, Autoplay]}
      >
        {dataSwiper &&
          dataSwiper.map((card, index) => (
            <SwiperSlide key={index}>
              <Slide
                texto1EnPng={card.texto1EnPng}
                texto2EnPng={card.texto2EnPng}
                className={card.className}
                textoPrimario={card.textoPrimario}
                textoSecundario={card.textoSecundario}
                link={card.link}
                botonPrimario={card.botonPrimario}
                botonSecundario={card.botonSecundario}
                conejo={card.conejo}
                numeroDeSlide={card.numeroDeSlide}
                backgroundImage={card.backgroundImage}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
