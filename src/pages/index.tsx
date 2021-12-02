import Layout from "components/Layout";
import Tags from "components/Tags";
import Banner from "components/Banner";
import Header from "components/Header";
import ExperienceWrapper from "components/Experiences/";
import EducationWrapper from "components/Education/";
import WorksWrapper from "components/Works";

export default function Home() {
  return (
    <Layout>
      <Header />
      <Tags />
      <Banner />
      <ExperienceWrapper />
      <EducationWrapper />
      <WorksWrapper />
    </Layout>
  );
}
