import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Parallax, Navigation } from "swiper";
SwiperCore.use([Parallax, Navigation]);

import NavigationButtons from "../Navigation/index";

import { params } from "utils/swiperParams";

import * as S from "./styles";

const SwiperSlideWorks = () => {
  return (
    <S.Wrapper>
      <div className="swiper-container">
        <Swiper
          {...params}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next"
          }}
        >
          <SwiperSlide>
            <div
              className="item-img bg-img"
              data-background="/img/bg-work-1.jpg"
              style={{
                backgroundImage: "url('/img/bg-work-1.jpg')"
              }}
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
              style={{
                backgroundImage: "url('/img/bg-work-1.jpg')"
              }}
              data-background="/img/bg-work-1.jpg"
            ></div>
            <div className="cont">
              <h6 data-swiper-parallax="-200">art & illustration</h6>
              <h4 data-swiper-parallax="-200">
                <a href="#0">Ler mais...</a>
              </h4>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="item-img bg-img"
              data-background="/img/bg-work-1.jpg"
              style={{
                backgroundImage: "url('/img/bg-work-1.jpg')"
              }}
            ></div>
            <div className="cont">
              <h6 data-swiper-parallax="-200">
                <a href="#0">art & illustration</a>
              </h6>
              <h4 data-swiper-parallax="-200">Ler mais...</h4>
            </div>
          </SwiperSlide>
        </Swiper>
        <NavigationButtons />
      </div>
    </S.Wrapper>
  );
};

export default SwiperSlideWorks;
