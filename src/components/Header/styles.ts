import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  background-color: var(--white);
  width: 100%;
  height: var(--px-72);
  border-bottom: 1px solid var(--gray-50);
  z-index: 10;

  & > .container {
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
