import styled, { css } from "styled-components";

import * as NavLinks from "components/NavLinks/styles";

export const Container = styled.footer`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.xxlarge};
    color: ${theme.colors.gray400};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: ${theme.spacings.xsmall};

    @media (max-width: 767px) {
      ${NavLinks.DesktopContainer} {
        display: none;
      }
    }
  `}
`;

export const ScrollTopContent = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius};
    background: ${theme.colors.panel};
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.primary};
    cursor: pointer;

    svg {
      display: grid;
      place-items: center;
    }

    @media (min-width: 768px) {
      display: none;
    }
  `}
`;

export const Icon = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.weight.medium};

    svg {
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.primary};
    }
  `}
`;

export const Copyright = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray400};
    text-align: center;
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.weight.medium};
    padding-top: ${theme.spacings.xsmall};
    padding-bottom: ${theme.spacings.xsmall};
    border-top: 1px solid ${theme.colors.panel};
  `}
`;

export const Strong = styled.strong`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`;
