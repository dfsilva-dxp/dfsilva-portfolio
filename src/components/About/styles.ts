import styled, { css } from "styled-components";

import * as PanelSkill from "components/PanelSkill/styles";
import * as Grid from "components/Grid/styles";

export const Container = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.xxlarge};
    padding-bottom: ${theme.spacings.xxlarge};
    position: relative;

    @media (max-width: 991px) {
      ${Grid.Display} {
        grid-template-columns: 1fr;
        gap: ${theme.spacings.xlarge};
      }

      ${Left} {
        order: 1;
      }
    }
  `}
`;

export const Left = styled.div`
  ${({ theme }) => css`
    display: grid;
    align-items: center;
    justify-items: center;

    gap: ${theme.spacings.small};
    max-width: 45rem;

    @media (min-width: 480px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);

      ${PanelSkill.Panel}:nth-child(2) {
        grid-area: 1 / 2 / 3 / 3;
      }
    }
  `}
`;

export const Right = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacings.xsmall};
  `}
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

export const Subtitle = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    line-height: 1.5;
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray400};
    font-weight: ${theme.font.weight.medium};
  `}
`;
