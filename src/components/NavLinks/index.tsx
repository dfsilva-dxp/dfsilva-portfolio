import { AnimateSharedLayout } from "framer-motion";

import { spring } from "utils/spring";

import {
  DesktopContainerProps,
  DesktopItemProps,
  MobileContainerProps,
  MobileItemProps,
  NavLinksProps
} from "./types";

import {
  Container,
  DesktopContainer,
  DesktopItem,
  Hovered,
  MobileContainer,
  MobileItem
} from "./styles";

export default function NavLinks({ children }: NavLinksProps) {
  return (
    <AnimateSharedLayout>
      <Container>{children}</Container>
    </AnimateSharedLayout>
  );
}

NavLinks.MobileContainer = function NavLinksMobileContainer({
  children
}: MobileContainerProps) {
  return <MobileContainer>{children}</MobileContainer>;
};

NavLinks.DesktopContainer = function NavLinksDesktopContainer({
  children
}: DesktopContainerProps) {
  return <DesktopContainer>{children}</DesktopContainer>;
};

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

NavLinks.MobileItem = function NavLinksMobileItem({
  children,
  index = "",
  handleHoverStart,
  handleHoverEnd,
  handleClick
}: MobileItemProps) {
  return (
    <MobileItem
      onClick={handleClick}
      onMouseEnter={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      <small>{index}</small>
      {children}
    </MobileItem>
  );
};

NavLinks.DesktopItem = function NavLinksDesktopItem({
  children,
  handleHoverStart,
  handleHoverEnd,
  handleClick
}: DesktopItemProps) {
  return (
    <DesktopItem
      onClick={handleClick}
      onMouseEnter={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      {children}
    </DesktopItem>
  );
};
