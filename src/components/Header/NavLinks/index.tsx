import { HTMLAttributes } from "react";
import { RiPhoneFill } from "react-icons/ri";

import * as S from "./styles";

type NavLinksProps = HTMLAttributes<HTMLUListElement>;

const NavLinks = ({ ...props }: NavLinksProps) => {
  return (
    <S.Wrapper {...props}>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#experiency">Experiência</a>
        </li>
        <li>
          <a href="#education">Formação</a>
        </li>
        <li>
          <a href="#project">Projetos</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
        <li className="phone-number">
          <RiPhoneFill style={{ color: "#E0E0E0", marginRight: "10px" }} />
          +55 11 9 5199-1612
        </li>
      </ul>
    </S.Wrapper>
  );
};

export default NavLinks;
