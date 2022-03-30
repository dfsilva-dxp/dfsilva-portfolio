import styled, { css } from "styled-components";
import { motion } from "framer-motion";

import * as NavLinks from "components/NavLinks/styles";

export const Container = styled(motion.span)`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
    display: grid;
    gap: ${theme.spacings.xxsmall};
    position: relative;
  `}
`;

export const Hovered = styled(NavLinks.Hovered)``;

export const Title = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    position: relative;

    &::after {
      content: "";
      position: absolute;
      background: url(/img/points-right.svg) center center/contain no-repeat;
      top: ${theme.spacings.xxsmall};
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
    line-height: 2.8rem;
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
