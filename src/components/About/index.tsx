import Image from "next/image";

import {
  AboutProps,
  DescriptionProps,
  LeftProps,
  RightProps,
  SubtitleProps,
  TitleProps
} from "./type";

import {
  Container,
  Description,
  Left,
  Picture,
  Right,
  Subtitle,
  Title
} from "./styles";

export default function About({ children }: AboutProps) {
  return <Container>{children}</Container>;
}

About.Left = function AboutLeft({ children }: LeftProps) {
  return <Left>{children}</Left>;
};

About.Right = function AboutRight({ children }: RightProps) {
  return <Right>{children}</Right>;
};

About.Title = function AboutTitle({ children }: TitleProps) {
  return <Title>{children}</Title>;
};

About.Subtitle = function AboutSubtitle({ children }: SubtitleProps) {
  return <Subtitle>{children}</Subtitle>;
};

About.Description = function AboutDescription({ children }: DescriptionProps) {
  return <Description>{children}</Description>;
};

About.Bars = function AboutBars() {
  return (
    <Picture>
      <Image
        src="/img/bars.svg"
        title="Bars"
        alt="Bars"
        width={65}
        height={12}
      />
    </Picture>
  );
};
