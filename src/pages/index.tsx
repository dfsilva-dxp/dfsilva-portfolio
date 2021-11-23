import Layout from "components/Layout";
import Tags from "components/Tags";
import Banner from "components/Banner";
import Header from "components/Header";
import ExperiencySection from "components/ExperiencySection";

export default function Home() {
  return (
    <Layout>
      <Header />
      <Tags />
      <Banner />
      <ExperiencySection />
    </Layout>
  );
}
