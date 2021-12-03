import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

import * as S from "./styles";

const WorksWrapper = () => {
  return (
    <S.Wrapper>
      <div className="container">
        <div className="swiper-container">
          <Swiper
            spaceBetween={20}
            slidesPerView={2}
            centeredSlides={true}
            loop={true}
            speed={1000}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              767: {
                slidesPerView: 2
              }
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </S.Wrapper>
  );
};

export default WorksWrapper;
