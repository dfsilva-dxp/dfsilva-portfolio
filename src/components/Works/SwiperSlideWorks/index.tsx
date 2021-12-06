import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Parallax, Navigation } from "swiper";
SwiperCore.use([Parallax, Navigation]);

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
        <div className="cursor-pointer swiper-button-next swiper-nav-ctrl simp-next">
          <span className="simple-btn right next">Next</span>
        </div>
        <div className="cursor-pointer swiper-button-prev swiper-nav-ctrl simp-prev">
          <span className="simple-btn prev">Prev</span>
        </div>
      </div>
    </S.Wrapper>
  );
};

export default SwiperSlideWorks;
