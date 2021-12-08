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

export type EducationSectionProps = {
  title: string;
  description: string;
  schooling: Schooling[];
  courses: Courses[];
  languages: Languages[];
};

export type Schooling = {
  id: string;
  type: string;
  course: string;
  school: string;
};

export type Courses = {
  id: string;
  title: string;
  courses: Course[];
};

export type Course = {
  id: string;
  title: string;
  duration_level: number;
};

export type Languages = {
  id: string;
  title: string;
  language: Language[];
};

export type Language = {
  id: string;
  title: string;
  duration_level: string;
};

export type PortfolioProps = {
  logo: LogoProps;
  banner: BannerProps;
  experienceSection: ExperienceSectionProps;
  educationSection: EducationSectionProps;
};
