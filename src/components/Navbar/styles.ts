import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    position: fixed;
    left: 0;
    right: 0;
    height: 6rem;
    background: ${theme.colors.black};
    z-index: ${theme.layers.overlay};
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${theme.colors.panelAlpha};
  `}
`;

export const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
