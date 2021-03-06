import { ReactNode } from "react";

export type MenuProps = {
  children: ReactNode;
  isActive: boolean;
};

export type ContentProps = Pick<MenuProps, "children">;

export type MenuDesktopProps = Pick<MenuProps, "children">;
