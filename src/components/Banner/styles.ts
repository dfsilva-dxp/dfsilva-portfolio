import styled from "styled-components";

export const Banner = styled.section`
  margin-top: -1px;
  height: calc(100vh - 4.5rem);

  & > .container {
    height: 100%;
  }
`;

export const Display = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Text = styled.div`
  flex: 1;
  grid-template-rows: repeat(2, 1fr);
  gap: var(--px-20);

  .text-left {
  }

  @media (min-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }
`;

export const LeftContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: var(--px-16);

  h1 {
    font-size: var(--ft-18);
    color: var(--purple-500);

    &::before {
      content: "---- ";
      letter-spacing: -4px;
      margin-right: var(--px-8);
    }
  }

  h2 {
    font-size: var(--ft-40);
    line-height: 1;

    @media (min-width: 768px) {
      font-size: var(--ft-72);
      line-height: 0.8;
    }
  }

  p {
    color: var(--gray-400);
  }
`;

export const RightContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  span {
    font-family: "DNSV Bold";
    font-size: var(--ft-72);
    line-height: 0.75;
    color: var(--purple-500);

    &:nth-child(2) {
      opacity: 0.6;
    }
    &:nth-child(3) {
      opacity: 0.3;
    }
    &:nth-child(4) {
      opacity: 0.3;
      -webkit-text-stroke: 1px var(--purple-500);
      color: transparent;
    }
  }
`;

export const Picture = styled.picture`
  height: 118px;
`;
