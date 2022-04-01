import styled, { css } from "styled-components";

import * as Header from "components/Header/styles";
import * as About from "components/About/styles";
import * as Grid from "components/Grid/styles";

export const Container = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.xxlarge};
    padding-bottom: ${theme.spacings.xxlarge};

    @media (max-width: 991px) {
      ${Grid.Display} {
        grid-template-columns: 1fr;
        gap: ${theme.spacings.xlarge};
      }
    }
  `}
`;

export const Left = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacings.xsmall};
  `}
`;

export const Right = styled.div`
  display: grid;
  place-items: center;
`;

export const Title = styled(Header.Title)``;

export const Subtitle = styled(About.Subtitle)``;

export const Description = styled(Header.ShortDescription)``;

export const Address = styled.address`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacings.xsmall};
    margin-top: ${theme.spacings.xxlarge};
    padding-bottom: ${theme.spacings.medium};
  `}
`;

export const GroupContent = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: ${theme.spacings.medium};
    align-items: center;
    justify-content: center;
  `}
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.medium};
    color: ${theme.colors.gray400};
  `}
`;

export const Icon = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    background: ${theme.colors.panel};
    padding: ${theme.spacings.xxsmall};
    display: grid;
    place-items: center;
    border-radius: ${theme.border.radius};
  `}
`;
