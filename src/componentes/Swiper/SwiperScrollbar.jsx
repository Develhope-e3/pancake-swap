// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-fade';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { EffectFade, Navigation, Pagination } from 'swiper/modules';
// import Slide1 from '../../assets/iconos/Slide1';
// import Slide2 from '../../assets/iconos/Slide2';
// import Slide3 from '../../assets/iconos/Slide3';

// export default function SwiperScrollbar(){
//   return (
//     <>
//       <Swiper
//         spaceBetween={30}
//         effect={'fade'}
//         navigation={true}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[EffectFade, Navigation, Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <Slide1/>
//         </SwiperSlide>
//         <SwiperSlide>
//           <Slide2/>
//         </SwiperSlide>
//         <SwiperSlide>
//           <Slide3/>
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import Slide1 from '../../assets/iconos/Slide1';
import Slide2 from '../../assets/iconos/Slide2';
import Slide3 from '../../assets/iconos/Slide3';
import 'swiper/css';
import 'swiper/css/scrollbar';
import '../Swiper/SwiperScrollbar.scss'



export default function SwiperScrollbar() {
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide><Slide1/></SwiperSlide>
        <SwiperSlide><Slide2/></SwiperSlide>
        <SwiperSlide><Slide3/></SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}