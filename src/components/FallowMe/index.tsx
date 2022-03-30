import { AnimateSharedLayout } from "framer-motion";

import {
  FallowMeProps,
  IconProps,
  MessagePorps,
  SocialContainerProps
} from "./types";

import { Container, Hovered, Icon, Message, SocialContainer } from "./styles";

export default function FallowMe({ children }: FallowMeProps) {
  return <Container>{children}</Container>;
}

FallowMe.Message = function FallowMeMessage({ children }: MessagePorps) {
  return <Message>{children}</Message>;
};

FallowMe.SocialContainer = function FallowSocialContainer({
  children
}: SocialContainerProps) {
  return (
    <AnimateSharedLayout>
      <SocialContainer>{children}</SocialContainer>
    </AnimateSharedLayout>
  );
};

FallowMe.Hovered = function FallowHovered() {
  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30
  };

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

FallowMe.Icon = function FallowIcon({
  children,
  handleHoverStart,
  handleHoverEnd
}: IconProps) {
  return (
    <Icon onMouseEnter={handleHoverStart} onHoverEnd={handleHoverEnd}>
      {children}
    </Icon>
  );
};
