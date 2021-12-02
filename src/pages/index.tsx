import Layout from "components/Layout";
import Tags from "components/Tags";
import Banner from "components/Banner";
import Header from "components/Header";
import ExperiencySection from "components/ExperiencySection";
import EducationSection from "components/EducationSection";

export default function Home() {
  return (
    <Layout>
      <Header />
      <Tags />
      <Banner />
      <ExperiencySection />
      <EducationSection />
    </Layout>
  );
}
