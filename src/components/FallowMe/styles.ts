import styled, { css } from "styled-components";
import { motion } from "framer-motion";

import * as NavLinks from "components/NavLinks/styles";

export const Container = styled.div`
  ${({ theme }) => css`
    width: fit-content;
    height: fit-content;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: ${theme.spacings.xsmall};
  `}
`;

export const Message = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.weight.medium};
  `}
`;

export const SocialContainer = styled(motion.span)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const Hovered = styled(NavLinks.Hovered)``;

export const Icon = styled(motion.span)`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    position: relative;
    font-size: ${theme.font.sizes.medium};

    svg {
      display: grid;
      place-items: center;
    }

    &:hover svg {
      color: ${theme.colors.primary};
    }
  `}
`;
