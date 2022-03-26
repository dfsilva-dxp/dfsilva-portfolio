import { BaseProps, ContainerProps } from "./types";

import { Container, Content, Grid } from "./tyles";

export default function Base({ children }: BaseProps) {
  return <Content>{children}</Content>;
}

Base.Container = function BaseContainer({ children }: ContainerProps) {
  return <Container>{children}</Container>;
};

Base.Grid = function BaseGrid() {
  return <Grid />;
};
