import { RiArrowUpSLine } from "react-icons/ri";

import {
  ContentProps,
  CopyrightProps,
  FooterProps,
  IconProps,
  StrongProps
} from "./types";

import {
  Container,
  Content,
  Copyright,
  Icon,
  ScrollTopContent,
  Strong
} from "./styles";

export default function Footer({ children }: FooterProps) {
  return <Container>{children}</Container>;
}

Footer.Content = function FooterContent({ children }: ContentProps) {
  return <Content>{children}</Content>;
};

Footer.Icon = function FooterIcon({ children }: IconProps) {
  return <Icon>{children}</Icon>;
};

Footer.ScrollTopIcon = function FooterLink() {
  return (
    <ScrollTopContent>
      <RiArrowUpSLine />
    </ScrollTopContent>
  );
};

Footer.Copyright = function FooterCopyright({ children }: CopyrightProps) {
  return <Copyright>{children}</Copyright>;
};

Footer.Strong = function FooterStrong({ children }: StrongProps) {
  return <Strong>{children}</Strong>;
};
