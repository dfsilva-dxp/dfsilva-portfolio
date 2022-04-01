import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div``;

export const MobileContainer = styled(motion.ul)`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall};
    transform: translateX(100vw);
    opacity: 0;
    transition: opacity ${theme.transition.default};
    transition-delay: 1s;
  `}
`;

export const DesktopContainer = styled(motion.ul)`
  display: flex;
  align-items: center;
  justify-content: center;
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

export const MobileItem = styled(motion.li)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.weight.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
    cursor: pointer;
    position: relative;

    small {
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.weight.medium};
      color: ${theme.colors.primary};
    }
  `}
`;

export const DesktopItem = styled(motion.li)`
  ${({ theme }) => css`
    position: relative;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    cursor: pointer;
    font-weight: ${theme.font.weight.medium};
    color: ${theme.colors.gray400};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.xxsmall};
    transition: color ${theme.transition.default};

    &:hover {
      color: ${theme.colors.primary};
    }

    span {
      font-size: ${theme.font.sizes.small};
    }

    strong {
      color: ${theme.colors.primary};
    }
  `}
`;
