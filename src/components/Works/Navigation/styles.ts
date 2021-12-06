import styled from "styled-components";

export const Wrapper = styled.section`
  display: none;

  @media (min-width: 767px) {
    display: block;
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

  .next,
  .prev {
    font-weight: 600;
  }
`;
