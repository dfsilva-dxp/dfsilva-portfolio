import { ReactNode } from "react";

export type NavLinksProps = {
  children: ReactNode;
};

export type MobileContainerProps = Pick<NavLinksProps, "children">;

export type DesktopContainerProps = Pick<NavLinksProps, "children">;

export type MobileItemProps = {
  children: ReactNode;
  index?: string;
  handleHoverStart: () => void;
  handleHoverEnd: () => void;
  handleClick: () => void;
};

export type DesktopItemProps = Omit<MobileItemProps, "index"> & {
  icon?: ReactNode | null;
};
