import {
  AddressProps,
  ContactUsProps,
  DescriptionProps,
  GroupContentProps,
  IconProps,
  LeftProps,
  ParagraphProps,
  RightProps,
  SubtitleProps,
  TitleProps
} from "./types";

import {
  Address,
  Container,
  Description,
  GroupContent,
  Icon,
  Left,
  Paragraph,
  Right,
  Subtitle,
  Title
} from "./styles";

export default function ContactUs({ children }: ContactUsProps) {
  return <Container>{children}</Container>;
}

ContactUs.Left = function ContactUsLeft({ children }: LeftProps) {
  return <Left>{children}</Left>;
};

ContactUs.Right = function ContactUsRight({ children }: RightProps) {
  return <Right>{children}</Right>;
};

ContactUs.Title = function ContactUsTitle({ children }: TitleProps) {
  return <Title>{children}</Title>;
};

ContactUs.Subtitle = function ContactUsSubtitle({ children }: SubtitleProps) {
  return <Subtitle>{children}</Subtitle>;
};

ContactUs.Description = function ContactUsDescription({
  children
}: DescriptionProps) {
  return <Description>{children}</Description>;
};

ContactUs.Address = function ContactUsAddress({ children }: AddressProps) {
  return <Address>{children}</Address>;
};

ContactUs.Paragraph = function ContactUsParagraph({
  children
}: ParagraphProps) {
  return <Paragraph>{children}</Paragraph>;
};

ContactUs.Group = function ContactUsGroup({ children }: GroupContentProps) {
  return <GroupContent>{children}</GroupContent>;
};

ContactUs.Icon = function ContactUsIcon({ children }: IconProps) {
  return <Icon>{children}</Icon>;
};
