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
            <S.ItemBgImage
              className="item-img bg-img"
              backgroundLg="/img/bg-570x480.jpg"
              backgroundMd="/img/bg-410x480.jpg"
              backgroundSm="/img/bg-310x480.jpg"
            />

            <S.Cont>
              <h6 data-swiper-parallax="-200">art & illustration</h6>
              <h4 data-swiper-parallax="-200">
                <a href="#0">Ler mais...</a>
              </h4>
            </S.Cont>
          </SwiperSlide>

          <SwiperSlide>
            <S.ItemBgImage
              className="item-img bg-img"
              backgroundLg="/img/bg-570x480.jpg"
              backgroundMd="/img/bg-410x480.jpg"
              backgroundSm="/img/bg-310x480.jpg"
            />

            <S.Cont>
              <h6 data-swiper-parallax="-200">art & illustration</h6>
              <h4 data-swiper-parallax="-200">
                <a href="#0">Ler mais...</a>
              </h4>
            </S.Cont>
          </SwiperSlide>
          <SwiperSlide>
            <S.ItemBgImage
              className="item-img bg-img"
              backgroundLg="/img/bg-570x480.jpg"
              backgroundMd="/img/bg-410x480.jpg"
              backgroundSm="/img/bg-310x480.jpg"
            />

            <S.Cont>
              <h6 data-swiper-parallax="-200">art & illustration</h6>
              <h4 data-swiper-parallax="-200">
                <a href="#0">Ler mais...</a>
              </h4>
            </S.Cont>
          </SwiperSlide>
        </Swiper>
        <NavigationButtons />
      </div>
    </S.Wrapper>
  );
};

export default SwiperSlideWorks;
