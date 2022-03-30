import { Element } from "react-scroll";

import { About, Experiences, Header, Navbar } from "container";

export default function Home() {
  return (
    <>
      <Navbar />
      <Element name="Home">
        <Header />
      </Element>

      <About />

      <Element name="Portfólio">
        <Experiences />
      </Element>
    </>
  );
}
