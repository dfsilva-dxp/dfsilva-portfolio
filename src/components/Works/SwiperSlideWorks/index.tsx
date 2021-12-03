import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Parallax, Navigation } from "swiper";
SwiperCore.use([Parallax, Navigation]);

import { params } from "utils/swiperParams";

import * as S from "./styles";

const SwiperSlideWorks = () => {
  const navigationPrevRef = useRef<HTMLSpanElement>(null);
  const navigationNextRef = useRef<HTMLSpanElement>(null);

  return (
    <S.Wrapper>
      <div className="swiper-container">
        <Swiper
          {...params}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current
          }}
          onSlideChange={() => console.log("slide change")}
          onInit={(swiper) => {
            setInterval(() => {
              if (navigationPrevRef.current && navigationNextRef.current) {
                swiper.navigation.prevEl = navigationPrevRef.current;
                swiper.navigation.nextEl = navigationNextRef.current;
                swiper.navigation.update();
              }
            });
          }}
        >
          <SwiperSlide>
            <div
              className="item-img bg-img"
              data-background="../../../assets/bg-work-1.jpg"
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
        <div className="cursor-pointer swiper-button-next swiper-nav-ctrl simp-next">
          <span ref={navigationPrevRef} className="simple-btn right">
            Next
          </span>
        </div>
        <div className="cursor-pointer swiper-button-prev swiper-nav-ctrl simp-prev">
          <span ref={navigationNextRef} className="simple-btn">
            Prev
          </span>
        </div>
      </div>
    </S.Wrapper>
  );
};

export default SwiperSlideWorks;
