import Image from "next/image";

import DottedSquare from "components/DottedSquare";

import {
  DescriptionProps,
  HeaderProps,
  LeftProps,
  ShortDescriptionProps,
  TitleProps
} from "./types";

import {
  Container,
  Description,
  Left,
  Picture,
  Right,
  ShortDescription,
  Title
} from "./styles";

export default function Header({ children }: HeaderProps) {
  return <Container>{children}</Container>;
}

Header.Left = function HeaderLeft({ children }: LeftProps) {
  return <Left>{children}</Left>;
};

Header.Right = function HeaderLeft() {
  return (
    <Right>
      <DottedSquare />
      <DottedSquare />
    </Right>
  );
};

Header.Title = function HeaderTitle({ children }: TitleProps) {
  return <Title>{children}</Title>;
};

Header.Description = function HeaderDescription({
  children
}: DescriptionProps) {
  return <Description>{children}</Description>;
};

Header.ShortDescription = function HeaderShortDescription({
  children
}: ShortDescriptionProps) {
  return <ShortDescription>{children}</ShortDescription>;
};

Header.Arrow = function HeaderArrow() {
  return (
    <Picture>
      <Image
        src="/img/arrow.svg"
        title="Scroll down"
        alt="Scroll down"
        width={20}
        height={12}
      />
    </Picture>
  );
};
