export type ButtonProps = {
  label: string;
  url: string;
};

export type LogoProps = {
  alternativeText: string;
  url: string;
};

export type BannerProps = {
  title: string;
  description: string;
  short_description: string;
  button: ButtonProps;
};

export type PortfolioProps = {
  logo: LogoProps;
  banner: BannerProps;
};
