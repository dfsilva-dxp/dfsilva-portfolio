import styled, { css } from "styled-components";

import { PanelSkillProps } from "./types";

const panelModifiers = {
  tl: () => css`
    border-radius: 0 1.5rem 1.5rem 1.5rem;
  `,

  tr: () => css`
    border-radius: 1.5rem 0 1.5rem 1.5rem;
  `,

  bl: () => css`
    border-radius: 1.5rem 1.5rem 1.5rem 0;
  `,

  br: () => css`
    border-radius: 1.5rem 1.5rem 0 1.5rem;
  `
};

export const Panel = styled.div<Pick<PanelSkillProps, "brPosition">>`
  ${({ theme, brPosition }) => css`
    background: ${theme.colors.panel};
    width: 100%;

    padding: ${theme.spacings.small};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: ${theme.spacings.xxsmall};
    font-weight: ${theme.font.weight.medium};

    ${!!brPosition && panelModifiers[brPosition]};

    @media (min-width: 480px) {
      max-width: 24rem;
    }
  `}
`;
