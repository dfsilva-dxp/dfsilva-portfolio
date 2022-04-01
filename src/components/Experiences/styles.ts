import styled, { css } from "styled-components";
import { motion } from "framer-motion";

import * as Header from "components/Header/styles";
import * as About from "components/About/styles";

export const Container = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.xxlarge};
    padding-bottom: ${theme.spacings.xxlarge};
  `}
`;

export const Title = styled(Header.Title)``;

export const Subtitle = styled(About.Subtitle)`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};
  `}
`;

export const Works = styled(motion.span)`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxlarge};
    display: grid;

    @media (min-width: 576px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 992px) {
      grid-template-columns: repeat(4, 1fr);
    }
  `}
`;
