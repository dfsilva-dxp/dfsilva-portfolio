import Image from "next/image";
import { RiPhoneLine } from "react-icons/ri";
import { TiLocationOutline, TiMail } from "react-icons/ti";

import { Base, ContactUs, Grid } from "components";
import { FallowMe } from "container";

export default function ContacUsContainer() {
  return (
    <Base>
      <Base.Container>
        <Base.Grid />

        <ContactUs>
          <Grid>
            <ContactUs.Left>
              <ContactUs.Title>Entre em contato</ContactUs.Title>

              <ContactUs.Subtitle>Vamos conversar?</ContactUs.Subtitle>

              <ContactUs.Description>
                Estou aqui para ajudar em seu próximo projeto
              </ContactUs.Description>

              <ContactUs.Address>
                <ContactUs.Group>
                  <ContactUs.Icon>
                    <TiLocationOutline />
                  </ContactUs.Icon>
                  <ContactUs.Paragraph>
                    Suzano - São Paulo - Brasil
                  </ContactUs.Paragraph>
                </ContactUs.Group>

                <ContactUs.Group>
                  <ContactUs.Icon>
                    <TiMail />
                  </ContactUs.Icon>
                  <ContactUs.Paragraph>
                    dfsilva.dxp@gmail.com
                  </ContactUs.Paragraph>
                </ContactUs.Group>

                <ContactUs.Group>
                  <ContactUs.Icon>
                    <RiPhoneLine />
                  </ContactUs.Icon>
                  <ContactUs.Paragraph>+55 11 9 5199 1612</ContactUs.Paragraph>
                </ContactUs.Group>

                <FallowMe />
              </ContactUs.Address>
            </ContactUs.Left>

            <ContactUs.Right>
              <Image src="/img/logo-contactus.svg" width={271} height={54} />
            </ContactUs.Right>
          </Grid>
        </ContactUs>
      </Base.Container>
    </Base>
  );
}
