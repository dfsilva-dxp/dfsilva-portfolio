import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Parallax, Navigation } from "swiper";
SwiperCore.use([Parallax, Navigation]);

import { Work } from "types/api";
import { getImageUrl } from "utils/getImageUrl";

import NavigationButtons from "../Navigation/index";

import { params } from "utils/swiperParams";

import * as S from "./styles";

type Props = {
  works: Work[];
};

const SwiperSlideWorks = ({ works }: Props) => {
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
          {works &&
            works.map((work) => (
              <SwiperSlide key={work.id}>
                <S.ItemBgImage
                  className="item-img bg-img"
                  backgroundLg={getImageUrl(work.wide_img.url)}
                  backgroundMd={getImageUrl(work.average_img.url)}
                  backgroundSm={getImageUrl(work.small_img.url)}
                />

                <S.Cont>
                  <h6 data-swiper-parallax="-200">{work.title}</h6>
                  <h4 data-swiper-parallax="-200">
                    <a href={work.button.url}>{work.button.label}</a>
                  </h4>
                </S.Cont>
              </SwiperSlide>
            ))}
        </Swiper>
        <NavigationButtons />
      </div>
    </S.Wrapper>
  );
};

export default SwiperSlideWorks;
