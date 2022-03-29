import { LinkHTMLAttributes, ReactNode } from "react";

export type WorkProps = {
  children: ReactNode;
  handleHoverStart: () => void;
  handleHoverEnd: () => void;
};

export type TitleProps = Pick<WorkProps, "children">;

export type DescriptionProps = Pick<WorkProps, "children">;

export type CustomLinkProps = LinkHTMLAttributes<HTMLLinkElement> & {
  children: ReactNode;
  to: string;
};
