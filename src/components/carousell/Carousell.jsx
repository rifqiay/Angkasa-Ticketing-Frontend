import React, { useEffect } from "react";
import "./carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Japan from "../../assets/japan.svg";

const Carousell = () => {
  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView="auto"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[FreeMode, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="wrapImg">
            <img src={Japan} className={`rounded-circle ms-5 im`} alt="Japan" />
            <p className="text-center me-5 h6 mt-3 text-light">Japan</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={Japan} className={`rounded-circle ms-5 im`} alt="Japan" />
            <p className="text-center me-5 h6 mt-3 text-light">Japan</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={Japan} className={`rounded-circle ms-5 im`} alt="Japan" />
            <p className="text-center me-5 h6 mt-3 text-light">Japan</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={Japan} className={`rounded-circle ms-5 im`} alt="Japan" />
            <p className="text-center me-5 h6 mt-3 text-light">Japan</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={Japan} className={`rounded-circle ms-5 im`} alt="Japan" />
            <p className="text-center me-5 h6 mt-3 text-light">Japan</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={Japan} className={`rounded-circle ms-5 im`} alt="Japan" />
            <p className="text-center me-5 h6 mt-3 text-light">Japan</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousell;
