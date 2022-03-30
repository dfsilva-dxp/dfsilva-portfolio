import { HTMLAttributes, ReactNode } from "react";

export type BurguerProps = {
  children: ReactNode;
};

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  isActive: boolean;
};
