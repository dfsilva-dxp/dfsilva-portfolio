import Head from "next/head";

import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Daniel Silva &bull; Front-end Developer</title>
      </Head>
      <Layout>
        <div className="div container">
          <div className="grid" />
          Content
        </div>
      </Layout>
    </>
  );
}
