import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Slide from "./Slides/Slide";
import base1 from "../../assets/imagenes/asset 41.png";
import conejoVolando from "../../assets/imagenes/asset 46.png";
import "./SwiperScrollbar.scss";
export default function SwiperScrollbar() {
  const data = [
    {
      textoPrimario: "Titulo de la card 1",
      textoSecundario: "subtitulo de la card 1",
      descripcion: null,
      link: "Get Starded",
      botonPrimario: null,
      botonSecundario: null,
      conejo: conejoVolando,
      numeroDeSlide: 1,
      backgroundImage: base1,
    },
    {
      textoPrimario: "Titulo de la card 2",
      textoSecundario: "subtitulo de la card 2",
      descripcion: null,
      link: "Get Rekt",
      botonPrimario: null,
      botonSecundario: null,
      conejo: conejoVolando,
      numeroDeSlide: 2,
      backgroundImage: base1,
    },
  ];

  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        // className="mySwiper"
      >
        {data.map((card) => (
          <SwiperSlide>
            <Slide
              textoPrimario={card.textoPrimario}
              textoSecundario={card.textoSecundario}
              descripcion={card.descripcion}
              link={card.link}
              botonPrimario={card.botonPrimario}
              botonSecundario={card.botonSecundario}
              conejo={card.conejo}
              numeroDeSlide={card.numeroDeSlide}
              backgroundImage={card.backgroundImage}
            />
          </SwiperSlide>
        ))}
        {/* <Slide base={base1}>
          <img
            src={conejoVolando}
            alt="conejoVolando"
            style={{
              width: "262px",
              height: "170px",
              position: "absolute",
              right: "12rem",
              bottom: "4rem",
              zIndex: "50",
            }}
          />

          <div style={{ position: "absolute", top: "7.5rem", left: "4.5rem" }}>
            <Texto
              label={"Traverse the Treasure Islands on Galxe now!"}
              size={"title-md-bold"}
              color={
                "linear-gradient(166.02deg, #ffb237 -5.1%, #ffeb37 75.24%)"
              }
            />
            <Button
              isPrimary={true}
              widthValue={"158.6px"}
              heightValue={"48px"}
              gap={"2px"}
              texto={
                <Texto
                  label={"Get Started"}
                  size={"title-md-bold"}
                  color={"var(--text-color)"}
                />
              }
              svg={<LinkLearn color={"var(--text-color)"} />}
              onClick={() => console.log("boton conejo volador")}
            />
          </div>

          <img src="" alt="" />
        </Slide> */}
        {/* <Slide>
          <Slide2 />
        </Slide>
        <Slide>
          <Slide3 />
        </Slide>
        <Slide>
          <Slide4 />
        </Slide> */}
      </Swiper>
    </>
  );
}
