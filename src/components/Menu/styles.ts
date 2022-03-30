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
        transition-delay: 1s;
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
    z-index: ${theme.layers.menu};
    inset: 0;

    ${isActive && wrapperModifiers.active()}
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

export const Content = styled.div`
  height: 100vh;
  display: grid;
  align-items: center;
  justify-content: center;
  transform: translateX(100vw);
  transition: all 0.6s ease;
`;

export const Nav = styled.nav``;
