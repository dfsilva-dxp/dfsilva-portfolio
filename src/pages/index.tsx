import { Element } from "react-scroll";

import {
  About,
  ContactUs,
  Experiences,
  Footer,
  Header,
  Navbar
} from "container";

export default function Home() {
  return (
    <>
      <Navbar />

      <Element name="home">
        <Header />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="works">
        <Experiences />
      </Element>

      <Element name="contact-us">
        <ContactUs />
      </Element>

      <Footer />
    </>
  );
}
