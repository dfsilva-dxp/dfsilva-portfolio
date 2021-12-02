import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: var(--px-80);
  background: var(--gray-900);
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  z-index: 10;

  display: flex;
  align-items: center;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .mobile-view {
    display: flex;
  }

  .desktop-view {
    display: none;
  }

  @media (min-width: 992px) {
    .mobile-view {
      display: none;
    }

    .desktop-view {
      display: block;
    }
  }
`;

export const Logo = styled.h4`
  font-family: "Poppins", sans-serif;
  font-size: var(--ft-24);

  &::before {
    content: "_";
  }

  span {
    font-weight: 400;
    color: var(--green-500);

    &::after {
      content: ".";
    }
  }
`;
