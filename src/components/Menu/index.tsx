import { ContentProps, MenuDesktopProps, MenuProps } from "./types";

import {
  Background,
  Content,
  DesktopWrapper,
  Overlay,
  Wrapper
} from "./styles";

export default function Menu({ children, isActive = false }: MenuProps) {
  return <Wrapper isActive={isActive}>{children}</Wrapper>;
}

Menu.Background = function MenuBackground() {
  return <Background />;
};

Menu.Overlay = function MenuOverlay() {
  return <Overlay />;
};

Menu.Content = function MenuContent({ children }: ContentProps) {
  return <Content>{children}</Content>;
};

Menu.Desktop = function MenuDesktop({ children }: MenuDesktopProps) {
  return <DesktopWrapper>{children}</DesktopWrapper>;
};
