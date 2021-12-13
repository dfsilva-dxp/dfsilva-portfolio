import { HTMLAttributes } from "react";
import { RiPhoneFill } from "react-icons/ri";

import * as S from "./styles";

type NavLinksProps = HTMLAttributes<HTMLUListElement>;

function Navlinks({ ...props }) {
  return (
    <S.Wrapper {...props}>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">Sobre mim</a>
        </li>
        <li>
          <a href="#works">Portfólio</a>
        </li>
        <li>
          <a href="#contact">Vamos conversar</a>
        </li>
        <li>|</li>
        <li>
          <RiPhoneFill />
          +55 11 9 5199-1612
        </li>
      </ul>
    </S.Wrapper>
  );
}

export default Navlinks;
