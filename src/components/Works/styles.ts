import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  padding: var(--px-40) 0;
  background-color: var(--gray-950);

  .swiper-container {
    width: 100%;
  }
  .swiper {
    width: 100%;
    height: 70vh;
    margin: 15vh 0 0;
  }

  .swiper-slide {
    width: 320px;
    text-align: center;
    font-size: 18px;
    background: #fff;
    color: red;
    padding: 0px 15px;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .parallax-bg {
    border: 1px solid #ff0;
    position: absolute;
    left: 0;
    top: 0;
    width: 130%;
    height: 100%;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center;
  }

  .swiper-slide .title {
    font-size: 41px;
    font-weight: 300;
  }

  .swiper-slide .subtitle {
    font-size: 21px;
  }

  .swiper-slide .text {
    font-size: 14px;
    max-width: 400px;
    line-height: 1.3;
  }

  .swiper-slide-prev .text {
    opacity: 0;
    transform: translateX(-40px);
  }
  .swiper-slide-active .cd-btn {
    /* this is the visible slide */
    opacity: 1;
    transform: translateX(0);
  }

  @media (max-width: 575px) {
    .swiper-container {
      width: 98vw;
    }
  }
`;
