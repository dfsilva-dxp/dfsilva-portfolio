import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  ${({ theme }) => css`
    width: fit-content;
    height: fit-content;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: ${theme.spacings.xlarge};
    position: absolute;
    bottom: 0;

    @media (min-width: 576px) {
      right: 0;
    }
  `}
`;

export const Message = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    font-weight: ${theme.font.weight.bold};
  `}
`;

export const SocialContainer = styled(motion.span)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const Hovered = styled(motion.span)`
  ${({ theme }) => css`
    content: "";
    position: absolute;
    inset: 0;
    background: ${theme.colors.panel};
    border-radius: ${theme.border.radius};
    z-index: -1;
  `}
`;

export const Icon = styled(motion.span)`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    position: relative;
    display: grid;
    place-items: center;

    &:hover svg {
      color: ${theme.colors.primary};
    }
  `}
`;
