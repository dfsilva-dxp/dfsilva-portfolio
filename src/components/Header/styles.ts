import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background: var(--white);
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Logo = styled.h4`
  font-family: "Poppins", sans-serif;
  font-size: var(--ft-22);

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
