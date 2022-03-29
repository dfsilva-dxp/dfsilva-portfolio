import styled, { css } from "styled-components";

export const Content = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: fit-content;
    border-top: 1px solid ${theme.colors.panelAlpha};
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: ${theme.spacings.small};
    padding-right: ${theme.spacings.small};
    position: relative;

    @media (min-width: 576px) {
      max-width: 540px;
    }
    @media (min-width: 768px) {
      max-width: 750px;
    }
    @media (min-width: 992px) {
      max-width: 970px;
    }
    @media (min-width: 1200px) {
      max-width: 1170px;
    }
    @media (min-width: 1920px) {
      max-width: 1640px;
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    position: absolute;
    border-left: 1px solid ${theme.colors.panelAlpha};
    border-right: 1px solid ${theme.colors.panelAlpha};
    left: ${theme.spacings.small};
    right: ${theme.spacings.small};
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    z-index: -1;

    &::before {
      content: "";
      border-right: 1px solid ${theme.colors.panelAlpha};
    }
  `}
`;
