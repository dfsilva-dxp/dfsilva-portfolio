import styled, { css } from "styled-components";

import * as Square from "components/DottedSquare/styles";
import * as Grid from "components/Grid/styles";

export const Container = styled.div`
  ${({ theme }) => css`
    padding-top: calc(${theme.spacings.xxlarge} * 2);
    padding-bottom: ${theme.spacings.xxlarge};
    position: relative;
    display: grid;
    gap: ${theme.spacings.xlarge};
  `}

  ${Grid.Display} {
    @media (min-width: 768px) {
      grid-template-columns: 2fr 1fr;
    }

    @media (min-width: 991px) {
      width: 100%;
    }
  }
`;

export const Left = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacings.xsmall};
  `}
`;

export const Right = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  ${Square.Container}:first-child {
    bottom: 0;
  }
  ${Square.Container}:last-child {
    right: 0;
  }
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    background: #80ffea;
    background: ${theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 100%;
    background-clip: text;
    font-size: ${theme.font.sizes.medium};

    &::before {
      content: "---";
      font-weight: ${theme.font.weight.bold};
      letter-spacing: -3px;
      margin-right: 0.8rem;
    }
  `}
`;

export const Description = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    line-height: 1;

    @media (min-width: 523px) {
      font-size: ${theme.font.sizes.xlarge};
    }

    @media (min-width: 991px) {
      font-size: ${theme.font.sizes.xxlarge};
    }
  `}
`;

export const ShortDescription = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray400};
    font-weight: ${theme.font.weight.medium};
  `}
`;

export const Picture = styled.div`
  display: grid;
  place-items: center;

  img {
    width: fit-content;
    height: fit-content;
  }
`;
