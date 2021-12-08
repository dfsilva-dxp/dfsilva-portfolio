import { TiMail } from "react-icons/ti";
import {
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiPhoneFill,
  RiWhatsappLine
} from "react-icons/ri";

import { ContactUs } from "types/api";

import ContactTypeContent from "./ContactTypeContent";

import * as S from "./styles";

const ContactUsWrapper = ({ title, contact_type }: ContactUs) => {
  return (
    <S.Wrapper>
      <div className="container">
        <S.Display>
          <h1 className="title-section">{title}</h1>
          <S.ContactUsContent>
            {contact_type &&
              contact_type.map((item) => (
                <ContactTypeContent
                  key={item.id}
                  icon={
                    item.title.toLocaleLowerCase() === "e-mail" ? (
                      <TiMail />
                    ) : (
                      <RiPhoneFill />
                    )
                  }
                  title={item.title}
                  data={item.data}
                />
              ))}

            <S.SocialContent>
              <span className="simple-btn">SIGA-ME NAS REDES SOCIAIS</span>
              <S.SocialIcons>
                <li>
                  <a
                    href="https://github.com/daniel-silva-dxp"
                    rel="noreferrer"
                  >
                    <RiGithubLine />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/daniel.dxp/"
                    rel="noreferrer"
                  >
                    <RiInstagramLine />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/daniel-silva-dxp/"
                    rel="noreferrer"
                  >
                    <RiLinkedinBoxLine />
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/qr/6MXVTWEZ3CNKK1" rel="noreferrer">
                    <RiWhatsappLine />
                  </a>
                </li>
              </S.SocialIcons>
            </S.SocialContent>
          </S.ContactUsContent>
        </S.Display>
      </div>
    </S.Wrapper>
  );
};

export default ContactUsWrapper;
