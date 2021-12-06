import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Parallax } from "swiper";
SwiperCore.use([Parallax]);

import { params } from "utils/swiperParams";

import * as S from "./styles";

const SwiperSlideWorks = () => {
  const navigationPrevRef = useRef<HTMLElement>(null);
  const navigationNextRef = useRef<HTMLElement>(null);

  const onBeforeInit = (Swiper: SwiperCore): void => {
    if (navigationPrevRef.current && navigationNextRef.current) {
      if (typeof Swiper.params.navigation !== "boolean") {
        const navigation = Swiper.navigation;
        navigation.prevEl = navigationPrevRef.current;
        navigation.nextEl = navigationNextRef.current;
      }
    }
  };

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
          onBeforeInit={onBeforeInit}
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
