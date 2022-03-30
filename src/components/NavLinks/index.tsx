import { AnimateSharedLayout } from "framer-motion";

import { spring } from "utils/spring";

import { ItemProps, NavLinksProps } from "./types";

import { Container, Hovered, Item } from "./styles";

export default function NavLinks({ children }: NavLinksProps) {
  return (
    <AnimateSharedLayout>
      <Container>{children}</Container>
    </AnimateSharedLayout>
  );
}

NavLinks.Hovered = function NavLinksHovered() {
  return (
    <Hovered
      layoutId="nav"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={spring}
    />
  );
};

NavLinks.Item = function NavLinksItem({
  children,
  index,
  handleHoverStart,
  handleHoverEnd,
  handleClick
}: ItemProps) {
  return (
    <Item
      onClick={handleClick}
      onMouseEnter={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      <small>{index}</small>
      {children}
    </Item>
  );
};
