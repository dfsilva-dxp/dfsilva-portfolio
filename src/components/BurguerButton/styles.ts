import styled, { css } from "styled-components";

import { ButtonProps } from "./types";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: ${theme.spacings.xlarge};
    display: grid;
    place-items: center;

    @media (min-width: 768px) {
      display: none;
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 1px;
    background: ${theme.colors.white};
    top: 0;
    transition: all ease 0.2s;
    position: relative;

    &:before,
    &:after {
      content: "";
      position: absolute;
      left: 0;
      background: ${theme.colors.white};
      height: 100%;
      transition: all ease 0.3s;
    }
    &:before {
      top: -6px;
      width: 50%;
    }
    &:after {
      top: 6px;
      width: 75%;
    }
  `}
`;

const buttonModifiers = {
  close: () => css`
    & ${Content} {
      transform: rotate(-45deg);
    }
    & ${Content}:after {
      opacity: 0;
      transition: all ease 0.2s;
    }
    & ${Content}:before {
      top: 0;
      transform: rotate(90deg);
      width: 100%;
      transition: all ease 0.2s;
    }
  `
};

export const Button = styled.button<Pick<ButtonProps, "isActive">>`
  ${({ isActive }) => css`
    width: 40px;
    height: 30px;
    background: transparent;
    border: 0;
    outline: transparent;
    cursor: pointer;

    &:hover ${Content}:before {
      width: 100%;
    }
    &:hover ${Content}:after {
      width: 100%;
    }

    ${isActive && buttonModifiers.close}
  `}
`;
