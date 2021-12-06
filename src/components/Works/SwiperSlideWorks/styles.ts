import styled from "styled-components";

type ItemBgImageProps = {
  backgroundLg?: string;
  backgroundMd?: string;
  backgroundSm?: string;
};

export const Wrapper = styled.section`
  .swiper-container {
    width: 100%;
    position: relative;

    @media (max-width: 575px) {
      width: 95vw;
    }
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    padding: 0px var(--px-10);
    display: flex;
    flex-direction: column;
  }
`;

export const ItemBgImage = styled.div<ItemBgImageProps>`
  width: 100%;
  height: 480px;
  opacity: 0.3;

  &.item-img {
    position: relative;
    line-height: 0;
    border-radius: 10px 10px 0 0;
    transition: all 0.4s;
    .swiper-slide-active & {
      opacity: 1;
    }
  }

  &.bg-img {
    background-image: url(${({ backgroundSm }) => backgroundSm});
    background-size: 110%;
    background-position: center center;
    background-repeat: no-repeat;

    @media (min-width: 640px) {
      background-image: url(${({ backgroundMd }) => backgroundMd});
    }

    @media (min-width: 992px) {
      background-image: url(${({ backgroundLg }) => backgroundLg});
    }
  }
`;

export const Cont = styled.div`
  opacity: 1;
  transition: all 0.4s;

  h4,
  h4 a,
  h6 {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: var(--ft-14);
  }

  h6 {
    margin-top: var(--px-20);
    text-transform: uppercase;
    color: var(--green-500);
  }

  h4,
  h4 a {
    display: block;
    color: var(--white);
  }

  .swiper-slide-prev & h4,
  .swiper-slide-prev & h6 {
    opacity: 0;
    transform: translateX(-40px);
  }

  .swiper-slide-next & h4,
  .swiper-slide-next & h6 {
    opacity: 0;
    transform: translateX(-40px);
  }
`;
