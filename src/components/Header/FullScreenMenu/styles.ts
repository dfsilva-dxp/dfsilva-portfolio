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
    background: rgba(38, 41, 47, 0.6);
    top: 0;
    left: 100%;
    transition: all 0.7s ease 0.3s;
  }

  .bg2 {
    background: var(--gray-900);
    transition-delay: 0s;
  }

  .wrap {
    width: 100vw;
    height: 100vh;
    transform: translateX(100vw);
    transition: all 0.8s ease 0s;

    display: flex;
    align-items: center;
    justify-content: center;

    ul {
      position: relative;
      opacity: 0;
      transition: all 0.8s ease 0s;
    }

    & ul::after,
    & ul::before {
      color: var(--gray-200);
      font-size: var(--ft-16);
      font-family: "La Belle Aurore", cursive;
      position: absolute;
    }

    & ul::before {
      content: "<nav>";
    }

    & ul::after {
      content: "</nav>";
      bottom: 0;
      right: 0;
    }

    & ul li {
      position: relative;
      padding: 0 15px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      transition: all 0.2s ease 0.3s;
    }

    & ul li a {
      color: #fff;
      position: relative;
      font-weight: 400;
      padding: 5px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: all 0.2s ease 0.2s;
    }

    & ul li a:hover {
      opacity: 1;
    }

    & ul li a span {
      font-size: var(--ft-14);
      font-weight: 400;
      margin-right: 5px;
    }

    & ul li a span:last-child {
      font-size: var(--ft-54);
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
