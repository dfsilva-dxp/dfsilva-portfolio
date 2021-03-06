import styled, { css } from "styled-components";

import { MenuProps } from "./types";

const wrapperModifiers = {
  active: () => css`
    width: 100%;
    transition-delay: 0.05s;

    ${Content} {
      transform: translateX(0);
      transition-delay: 0.4s;

      ul {
        opacity: 1;
        transform: translateX(0);
        transition-delay: 1s;
        display: block;
      }
    }

    ${Background} {
      left: 0;
      transition-delay: 0s;
    }

    ${Overlay} {
      left: 0;
      transition-delay: 0.3s;
    }
  `
};

export const Wrapper = styled.div<Pick<MenuProps, "isActive">>`
  ${({ theme, isActive }) => css`
    position: fixed;
    top: 0;
    width: 0%;
    height: 100vh;
    transition-delay: 1.1s;
    z-index: ${theme.layers.menu};

    ${isActive && wrapperModifiers.active()};

    @media (min-width: 768px) {
      display: none;
    }
  `}
`;

export const Background = styled.div`
  background: rgba(0, 255, 153, 0.6);
  position: absolute;
  inset: 0 0 0 100%;
  transition: all 0.7s ease 0.3s;
`;

export const Overlay = styled(Background)`
  ${({ theme }) => css`
    background: ${theme.colors.black};
    transition-delay: 0s;
  `}
`;

export const Content = styled.nav`
  height: 100vh;
  display: grid;
  align-items: center;
  justify-content: center;
  transform: translateX(100vw);
  transition: all 0.6s ease;
`;

export const DesktopWrapper = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;
