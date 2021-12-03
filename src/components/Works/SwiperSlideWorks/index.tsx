import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Parallax, Navigation } from "swiper";
SwiperCore.use([Parallax, Navigation]);

import * as S from "./styles";
import { useRef } from "react";

const breakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 0
  },
  640: {
    slidesPerView: 1,
    spaceBetween: 0
  },
  767: {
    slidesPerView: 2
  }
};

const SwiperSlideWorks = () => {
  const navigationPrevRef = useRef<HTMLDivElement>(null);
  const navigationNextRef = useRef<HTMLDivElement>(null);

  return (
    <S.Wrapper>
      <div className="swiper-container">
        <Swiper
          spaceBetween={0}
          slidesPerView={2}
          centeredSlides={true}
          loop={true}
          speed={1000}
          parallax={true}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current
          }}
          breakpoints={breakpoints}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => {
            console.log(swiper);
            if (navigationPrevRef.current && navigationNextRef.current) {
              swiper.navigation.nextEl = navigationNextRef.current;
              swiper.navigation.prevEl = navigationPrevRef.current;
            }
          }}
        >
          <SwiperSlide>
            <div
              className="item-img bg-img"
              data-background="img/portfolio/metro/03.jpg"
              data-swiper-parallax="-200"
            ></div>
            <div className="cont">
              <h6 data-swiper-parallax="-200">
                <a href="#0">art & illustration</a>
              </h6>
              <h4 data-swiper-parallax="-200">Ler mais...</h4>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="item-img bg-img"
              data-background="img/portfolio/metro/03.jpg"
              data-swiper-parallax="-200"
            ></div>
            <div className="cont">
              <h6 data-swiper-parallax="-200">
                <a href="#0">art & illustration</a>
              </h6>
              <h4 data-swiper-parallax="-200">Ler mais...</h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="item-img bg-img"
              data-background="img/portfolio/metro/03.jpg"
              data-swiper-parallax="-200"
            ></div>
            <div className="cont">
              <h6 data-swiper-parallax="-200">
                <a href="#0">art & illustration</a>
              </h6>
              <h4 data-swiper-parallax="-200">Ler mais...</h4>
            </div>
          </SwiperSlide>
        </Swiper>
        <div
          ref={navigationPrevRef}
          className="cursor-pointer swiper-button-next swiper-nav-ctrl simp-next"
        >
          <span className="simple-btn right">Next</span>
        </div>
        <div
          ref={navigationNextRef}
          className="cursor-pointer swiper-button-prev swiper-nav-ctrl simp-prev"
        >
          <span className="simple-btn">Prev</span>
        </div>
      </div>
    </S.Wrapper>
  );
};

export default SwiperSlideWorks;
