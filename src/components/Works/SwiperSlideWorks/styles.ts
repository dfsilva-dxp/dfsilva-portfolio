import styled from "styled-components";

export const Wrapper = styled.section`
  .swiper-container {
    border: 1px solid #fdd;
    width: 100%;
    height: auto;
    position: relative;
  }
  @media (max-width: 575px) {
    .swiper-container {
      width: 90vw;
      height: 70vh;
    }
  }
  .swiper {
    width: 100%;
    height: 100%;
    border: 1px solid #0f0;
  }

  .swiper-slide {
    width: 100%;
    border: 1px solid #f00;
    text-align: center;
    padding: 0px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .item-img {
    position: relative;
    width: 100%;
    height: 480px;
    line-height: 0;
    border-radius: 10px 10px 0 0;
    border: 1px solid #ff0;
  }

  .bg-img {
    /* position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0; */
    background-size: cover;
    background-position: center center;
  }

  .cont {
    padding-left: 30px;
    opacity: 1;
    transition: all 0.4s;

    h4,
    h6 {
      font-family: "Poppins", sans-serif;
      font-weight: 600;
    }

    h6 a {
      display: block;
      margin-top: var(--px-20);
      text-transform: uppercase;
      color: var(--green-500);
      font-size: var(--ft-14);
    }

    h4 {
      color: var(--white);
    }
  }

  .swiper-slide-prev .cont h4,
  .swiper-slide-prev .cont h6 {
    opacity: 0;
    transform: translateX(-40px);
  }
  .swiper-slide-next .cont h4,
  .swiper-slide-next .cont h6 {
    opacity: 0;
    transform: translateX(-40px);
  }

  .simp-next,
  .simp-prev {
    color: #fff;
    top: auto;
    bottom: 0;
  }
  .simp-next:after,
  .simp-prev:after {
    display: none;
  }

  .simp-next {
    right: 30px;
  }

  .simp-prev {
    left: 30px;
  }

  .swiper-nav-ctrl.swiper-button-next {
    right: 40px;
  }
  .slider .txt-botm .swiper-nav-ctrl.swiper-button-next i {
    margin-left: 10px;
  }
  .swiper-nav-ctrl.swiper-button-prev {
    left: 40px;
  }
`;
