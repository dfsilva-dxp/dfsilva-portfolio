import { ContentProps, MenuProps } from "./types";

import { Background, Content, Overlay, Wrapper } from "./styles";

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
