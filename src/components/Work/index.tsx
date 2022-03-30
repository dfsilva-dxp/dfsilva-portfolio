import Link from "next/link";

import { spring } from "utils/spring";

import {
  CustomLinkProps,
  DescriptionProps,
  TitleProps,
  WorkProps
} from "./types";

import { Container, CustonLink, Description, Hovered, Title } from "./styles";

export default function Work({
  children,
  handleHoverStart,
  handleHoverEnd
}: WorkProps) {
  return (
    <Container onMouseEnter={handleHoverStart} onHoverEnd={handleHoverEnd}>
      {children}
    </Container>
  );
}

Work.Hovered = function WorkHovered() {
  return (
    <Hovered
      layoutId="works"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={spring}
    />
  );
};

Work.Title = function WorkTitle({ children }: TitleProps) {
  return <Title>{children}</Title>;
};

Work.Description = function WorkDescription({ children }: DescriptionProps) {
  return <Description>{children}</Description>;
};

Work.Link = function WorkLink({ children, to }: CustomLinkProps) {
  return (
    <Link href={to} passHref>
      <CustonLink>{children}</CustonLink>
    </Link>
  );
};
