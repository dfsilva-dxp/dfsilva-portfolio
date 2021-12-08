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

export type ExperienceSectionProps = {
  title: string;
  description: string;
  experiences: ExperienceProps[];
};

export type ExperienceProps = {
  id: string;
  title: string;
  description: string;
  company: string;
  skills: Skills[];
  date: string;
};

export type Skills = {
  id: string;
  title: string;
};

export type PortfolioProps = {
  logo: LogoProps;
  banner: BannerProps;
  experienceSection: ExperienceSectionProps;
};
