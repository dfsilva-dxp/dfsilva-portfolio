import styled from "styled-components";

interface Props {
  transitionDelay?: number;
}

export const FullScreenNav = styled.div<Props>`
  z-index: 5;
  position: fixed;
  top: 0;
  width: 0%;
  height: 100vh;
  transition-delay: 1.1s;

  .bg1,
  .bg2 {
    margin-top: var(--px-80);
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 100%;
    transition: all 0.7s ease 0.3s;
  }

  .bg1 {
    background: rgba(127, 100, 238, 1);
  }

  .bg2 {
    background: var(--white);
    transition-delay: 0s;
  }

  &.active {
    width: 100%;
    transition-delay: 0.1s;

    .wrap {
      transform: translateX(0);
      transition-delay: 0.4s;

      ul {
        opacity: 1;
        transition-delay: 0.4s;
      }
    }
  }

  &.active .bg1,
  &.active .bg2 {
    left: 0;
  }

  &.active .bg1 {
    transition-delay: 0s;
  }

  &.active .bg2 {
    transition-delay: 0.3s;
  }
`;

export const ContentNav = styled.nav`
  border-top: 1px solid var(--gray-50);
  border-bottom: 1px solid var(--gray-50);
  width: 100vw;
  height: calc(100vh - 10rem);
  margin-top: 5rem;
  transform: translateX(100vw);
  transition: all 0.6s ease;

  & > .container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    gap: var(--px-20);
  }
`;
