import { ReactNode } from "react";

export type FooterProps = {
  children: ReactNode;
};

export type ContentProps = FooterProps;

export type CopyrightProps = FooterProps;

export type IconProps = FooterProps;

export type ScrollTopIconProps = {
  to: string;
};

export type StrongProps = FooterProps;
