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
  gap: var(--px-80);
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
        font-size: var(--ft-48);
      }
      @media (min-width: 1200px) {
        font-size: var(--ft-54);
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
    border: 1px solid #0f0;

    display: flex;
    flex-direction: column;
    gap: 2px;
    align-items: center;
    justify-content: center;

    span {
      font-size: var(--ft-48);
      line-height: 0.75;
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Scroll = styled.picture`
  height: 118px;
  display: grid;
  place-items: center;
`;
