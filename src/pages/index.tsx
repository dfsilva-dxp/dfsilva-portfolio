import { GetStaticProps } from "next";

import cliente from "graphql/client";
import GET_PORTFOLIO from "graphql/queries/getPortfolio";

import { PortfolioProps } from "types/api";

import Layout from "components/Layout";
import Header from "components/Header";
import Tags from "components/Tags";
import Banner from "components/Banner";
import ExperienceWrapper from "components/Experiences/";
import EducationWrapper from "components/Education/";
import WorksWrapper from "components/Works";
import ContactUsWrapper from "components/ContactUs";

export default function Home({
  logo,
  banner,
  experienceSection,
  educationSection,
  worksSection,
  contactUs
}: PortfolioProps) {
  const { works } = worksSection;

  return (
    <Layout>
      <Header logo={logo} />
      <Tags />
      <Banner banner={banner} />
      <ExperienceWrapper {...experienceSection} />
      <EducationWrapper {...educationSection} />
      <WorksWrapper works={works} />
      <ContactUsWrapper {...contactUs} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { portfolio } = await cliente.request(GET_PORTFOLIO);

  return {
    props: {
      ...portfolio
    },
    revalidate: 60 * 60 // 1 hours
  };
};
