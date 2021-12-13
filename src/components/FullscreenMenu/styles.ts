import styled from "styled-components";

export const FullScreenNav = styled.div`
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
    background: rgba(127, 100, 238, 0.6);
    top: 0;
    left: 100%;
    transition: all 0.7s ease 0.3s;
  }

  .bg2 {
    background: var(--white);
    transition-delay: 0s;
  }

  .wrap {
    position: relative;
    border-top: 1px solid var(--gray-50);
    border-bottom: 1px solid var(--gray-50);
    width: 100vw;
    height: calc(100vh - 10rem);
    margin-top: 5rem;
    transform: translateX(100vw);
    transition: all 0.7s ease;

    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    gap: var(--px-20);

    & > .container {
      border-left: 1px solid var(--gray-50);
      border-right: 1px solid var(--gray-50);
      position: absolute;
      top: 0;
      bottom: 0;
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      &::before {
        content: "";
        border-right: 1px solid var(--gray-50);
      }
    }

    & > ul {
      opacity: 0;
      color: var(--gray-400);
      transition: all 0.8s ease 0s;

      ul li {
        position: relative;
        padding: 0 15px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        transition: all 0.2s ease 0.3s;
      }

      li a {
        position: relative;
        font-weight: 400;
        padding: 5px;
        display: flex;
        align-items: center;
        opacity: 0.6;
        transition: all 0.2s ease 0.2s;
      }

      li a:hover {
        opacity: 1;
        color: var(--purple-500);
      }

      li a span {
        font-size: var(--ft-16);
        font-weight: 400;
        margin-right: 5px;
      }

      li a span:first-child {
        color: var(--green-500);
        font-weight: 700;
      }
      li a span:last-child {
        font-size: var(--ft-54);
      }
    }
  }

  &.active {
    width: 100%;
    transition-delay: 0.1s;

    .wrap {
      transform: translateX(0);
      transition-delay: 0.3s;

      ul {
        transition-delay: 0.5s;
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
  &.active ul {
    opacity: 1;
    transition-delay: 1s;
  }
`;
