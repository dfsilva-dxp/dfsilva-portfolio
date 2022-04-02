import Link from "next/link";
import { Link as ReactScrollLink } from "react-scroll";
import { RiHandHeartLine, RiPhoneLine } from "react-icons/ri";

import { settings } from "utils/react-scroll-settings";

import { Base, Footer, NavLinks } from "components";

export default function FooterContainer() {
  const desktopItems = [
    {
      name: "Home",
      to: "home"
    },
    {
      name: "Portfólio",
      to: "works"
    }
  ];

  return (
    <Base>
      <Base.Container>
        <Footer>
          <Footer.Content>
            <NavLinks.DesktopContainer>
              {desktopItems.map((item) => {
                return (
                  <ReactScrollLink to={item.to} key={item.name} {...settings}>
                    <NavLinks.DesktopItem>{item.name}</NavLinks.DesktopItem>
                  </ReactScrollLink>
                );
              })}

              <Link href="https://contate.me/dfsilva.dev" passHref>
                <a target="_blank" rel="noopener">
                  <RiPhoneLine title="Phone Icon" />
                  <strong>+55 11 9 5199 1612</strong>
                </a>
              </Link>
            </NavLinks.DesktopContainer>

            <ReactScrollLink to="home" {...settings} delay={200}>
              <Footer.ScrollTopIcon />
            </ReactScrollLink>

            <Footer.Icon>
              <RiHandHeartLine title="Hand Heart Icon" />
              Feito com amor!
            </Footer.Icon>
          </Footer.Content>
          <Footer.Copyright>
            © 2022 &bull; Todos os direitos reservados a{" "}
            <Footer.Strong>Daniel Silva</Footer.Strong>
          </Footer.Copyright>
        </Footer>
      </Base.Container>
    </Base>
  );
}
