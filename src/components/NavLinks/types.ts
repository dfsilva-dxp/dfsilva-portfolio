import { ReactNode } from "react";

export type NavLinksProps = {
  children: ReactNode;
};

export type ItemProps = {
  children: ReactNode;
  index: string;
  handleHoverStart: () => void;
  handleHoverEnd: () => void;
  handleClick: () => void;
};
