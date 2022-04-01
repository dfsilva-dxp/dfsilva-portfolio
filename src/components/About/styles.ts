import styled, { css } from "styled-components";

import * as Header from "components/Header/styles";
import * as Grid from "components/Grid/styles";
import * as PanelSkill from "components/PanelSkill/styles";
import * as Square from "components/Square/styles";

export const Container = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.xxlarge};
    padding-bottom: ${theme.spacings.xxlarge};
    position: relative;

    @media (max-width: 991px) {
      ${Grid.Display} {
        grid-template-columns: 1fr;
        gap: ${theme.spacings.xlarge};
        place-items: center;
      }

      ${Left} {
        order: 1;
      }
    }
  `}
`;

export const Left = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: grid;
    place-items: center;
    position: relative;

    gap: ${theme.spacings.small};
    max-width: 45rem;

    ${Square.Container} {
      bottom: -4rem;
      right: 0;
    }

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

export const Title = styled(Header.Title)``;

export const Subtitle = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    line-height: 1.5;
  `}
`;

export const Description = styled(Header.ShortDescription)`
  ${({ theme }) => css`
    em {
      color: ${theme.colors.primary};
    }
  `}
`;

export const Picture = styled.div`
  width: fit-content;
`;
