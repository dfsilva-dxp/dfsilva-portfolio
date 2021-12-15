import Head from "next/head";
import Banner from "../components/Banner";

import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Daniel Silva &bull; Front-end Developer</title>
      </Head>
      <Layout>
        <Banner />
      </Layout>
    </>
  );
}
