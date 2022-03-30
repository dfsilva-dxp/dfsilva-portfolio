import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.ul)`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall};
    opacity: 0;
    transition: opacity ${theme.transition.default};
    transition-delay: 1s;
  `}
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

export const Item = styled(motion.li)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxsmall};
    font-size: 2.4rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
    cursor: pointer;
    position: relative;

    small {
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.weight.medium};
      color: ${theme.colors.primary};
    }

    @media (min-width: 480px) {
      font-size: ${theme.font.sizes.xlarge};
    }
  `}
`;
