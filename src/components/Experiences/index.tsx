import { AnimateSharedLayout } from "framer-motion";

import {
  ExperiencesProps,
  SubtitleProps,
  TitleProps,
  WorksProps
} from "./types";

import { Container, Subtitle, Title, Works } from "./styles";

export default function Experiences({ children }: ExperiencesProps) {
  return <Container>{children}</Container>;
}

Experiences.Title = function ExperiencesTitle({ children }: TitleProps) {
  return <Title>{children}</Title>;
};

Experiences.Subtitle = function ExperiencesSubtitle({
  children
}: SubtitleProps) {
  return <Subtitle>{children}</Subtitle>;
};

Experiences.Works = function ExperiencesWorks({ children }: WorksProps) {
  return (
    <AnimateSharedLayout>
      <Works>{children}</Works>
    </AnimateSharedLayout>
  );
};
