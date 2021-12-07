import { GetStaticProps } from "next";

import cliente from "graphql/client";
import GET_PORTFOLIO from "graphql/queries/getPortfolio";

import Layout from "components/Layout";
import Header from "components/Header";
import Tags from "components/Tags";
import Banner from "components/Banner";
import ExperienceWrapper from "components/Experiences/";
import EducationWrapper from "components/Education/";
import WorksWrapper from "components/Works";
import ContactUsWrapper from "components/ContactUs";

export default function Home() {
  return (
    <Layout>
      <Header />
      <Tags />
      <Banner />
      <ExperienceWrapper />
      <EducationWrapper />
      <WorksWrapper />
      <ContactUsWrapper />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { portfolio } = await cliente.request(GET_PORTFOLIO);

  console.log(portfolio);

  return {
    props: {
      ...portfolio
    }
  };
};
