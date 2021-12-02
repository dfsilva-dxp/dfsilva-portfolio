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
    height: 480px;
  }

  .swiper-slide {
    width: 320px;
    text-align: center;
    font-size: 18px;
    background: #fff;
    color: red;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 575px) {
    .swiper-container {
      width: 100vw;
    }
  }
`;
