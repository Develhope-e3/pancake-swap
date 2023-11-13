import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Slide1 from '../../assets/iconos/Slide1';
import Slide2 from '../../assets/iconos/Slide2';
import Slide3 from '../../assets/iconos/Slide3';
import Slide4 from '../../assets/iconos/Slide4';

export default function SwiperScrollbar(){
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
          <Slide1/>
        </SwiperSlide>
        <SwiperSlide>
          <Slide2/>
        </SwiperSlide>
        <SwiperSlide>
          <Slide3/>
        </SwiperSlide>
        <SwiperSlide>
          <Slide4/>
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