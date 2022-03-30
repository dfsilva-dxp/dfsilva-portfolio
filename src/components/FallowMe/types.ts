import { ReactNode } from "react";

export type FallowMeProps = {
  children: ReactNode;
};

export type MessagePorps = FallowMeProps;

export type SocialContainerProps = FallowMeProps;

export type IconProps = FallowMeProps & {
  handleHoverStart: () => void;
  handleHoverEnd: () => void;
  to: string;
};
