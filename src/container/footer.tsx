import { Link } from "react-scroll";
import { RiHandHeartLine } from "react-icons/ri";

import { Base, Footer } from "components";

import { settings } from "utils/react-scroll-settings";

export default function FooterContainer() {
  return (
    <Base>
      <Base.Container>
        <Footer>
          <Footer.Content>
            <Link to="home" {...settings} delay={200}>
              <Footer.ScrollTopIcon />
            </Link>

            <Footer.Icon>
              <RiHandHeartLine />
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
