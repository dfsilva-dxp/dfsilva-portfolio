import { Element } from "react-scroll";

import { About, ContactUs, Experiences, Header, Navbar } from "container";

export default function Home() {
  return (
    <>
      <Navbar />

      <Element name="home">
        <Header />
      </Element>

      <About />

      <Element name="works">
        <Experiences />
      </Element>

      <Element name="contact-us">
        <ContactUs />
      </Element>
    </>
  );
}
