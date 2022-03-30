import Link from "next/link";
import { AnimateSharedLayout } from "framer-motion";

import { spring } from "utils/spring";

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
  return (
    <Hovered
      layoutId="fallowMe"
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
  handleHoverEnd,
  to
}: IconProps) {
  return (
    <Icon onMouseEnter={handleHoverStart} onHoverEnd={handleHoverEnd}>
      <Link href={to}>
        <a>{children}</a>
      </Link>
    </Icon>
  );
};
