import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.span)`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
    display: grid;
    gap: ${theme.spacings.xxsmall};
    position: relative;
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

export const Title = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    position: relative;

    &::after {
      content: "";
      position: absolute;
      background: url(/img/points-right.svg) no-repeat center center;
      top: 0;
      right: 0;
      width: 8px;
      height: 8px;
    }
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.gray400};
    font-weight: ${theme.font.weight.medium};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  `}
`;

export const CustonLink = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.weight.medium};
    text-align: right;

    transition: color ${theme.transition.default};

    &:hover {
      color: ${theme.colors.primary};
    }
  `}
`;
