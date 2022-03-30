import { NavbarProps, NavGridProps } from "./types";

import { Container, Grid } from "./styles";

export default function Navbar({ children }: NavbarProps) {
  return <Container>{children}</Container>;
}

Navbar.Grid = function NavbarGrid({ children }: NavGridProps) {
  return <Grid>{children}</Grid>;
};
