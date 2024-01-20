import dropCutImg from '../image/dropcut.png';
import fullSleev from '../image/full-sleev.png'
import narutoImg from '../image/naruto.png'
import womenTshirt from '../image/women.png'

import { Navigation, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import Swiper styles
import "swiper/css";

const HomePage = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        Autoplay
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide>
          <img src={dropCutImg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fullSleev} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={narutoImg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={womenTshirt} />
        </SwiperSlide>
      </Swiper>
     
    </>
  );
};

export default HomePage;
