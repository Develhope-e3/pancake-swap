import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Slide2 from "../../assets/iconos/Slide2";
import Slide3 from "../../assets/iconos/Slide3";
import Slide4 from "../../assets/iconos/Slide4";
import Slides from "../../assets/iconos/Slides";
import base1 from "../../assets/imagenes/asset 41.png";
import Texto from "../Texto/Texto";
import Button from "../Button/Button";
import conejoVolando from "../../assets/imagenes/asset 46.png";
import LinkLearn from "../../assets/iconos/LinkLearn";

export default function SwiperScrollbar() {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slides base={base1}>
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

            <div
              style={{ position: "absolute", top: "7.5rem", left: "4.5rem" }}
            >
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
          </Slides>
        </SwiperSlide>
        <SwiperSlide>
          <Slide2 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide3 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide4 />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Scrollbar } from 'swiper/modules';
// import Slide1 from '../../assets/iconos/Slide1';
// import Slide2 from '../../assets/iconos/Slide2';
// import Slide3 from '../../assets/iconos/Slide3';
// import 'swiper/css';
// import 'swiper/css/scrollbar';
// import '../Swiper/SwiperScrollbar.scss'

// export default function SwiperScrollbar() {
//   return (
//     <>
//       <Swiper
//         scrollbar={{
//           hide: true,
//         }}
//         bullet={true}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide><Slide1/></SwiperSlide>
//         <SwiperSlide><Slide2/></SwiperSlide>
//         <SwiperSlide><Slide3/></SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
