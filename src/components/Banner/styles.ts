import styled from "styled-components";

export const Banner = styled.section`
  margin-top: -1px;
  height: calc(100vh - 4.5rem);

  & > .container {
    height: 100%;
  }
`;

export const Presentation = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--px-20);
`;

export const Display = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Text = styled.div`
  width: 100%;
  display: grid;
  gap: var(--px-20);

  .display-left {
    h1 {
      font-size: var(--ft-18);
      color: var(--purple-500);

      &::before {
        content: "----";
        margin-right: var(--ft-10);
        letter-spacing: -3px;
      }
    }

    & > span {
      font-size: var(--ft-40);
      line-height: 1;
      font-weight: 700;

      @media (min-width: 992px) {
        font-size: var(--ft-54);
      }
      @media (min-width: 1200px) {
        font-size: var(--ft-72);
        line-height: 0.9;
      }
    }

    p {
      color: var(--gray-400);
    }

    h1,
    & > span {
      margin-bottom: var(--px-16);
    }
  }
  .display-right {
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 2px;
    align-items: center;
    justify-content: center;

    span {
      font-size: var(--ft-54);
      line-height: 0.75;
      color: var(--purple-500);

      &:nth-child(4) {
        opacity: 0.6;
      }
      &:nth-child(5) {
        opacity: 0.3;
      }
      &.text-stroke {
        opacity: 0.2;
        -webkit-text-stroke: 1px var(--purple-500);
        color: transparent;
      }
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: auto 1fr;
  }
`;

export const Scroll = styled.picture`
  height: 118px;
  display: grid;
  place-items: center;
`;

export const SquareChessItems = styled.picture`
  position: absolute;

  &:nth-child(1) {
    left: 0;
  }
  &:nth-child(2) {
    right: 0;
    top: var(--px-40);
  }
`;
