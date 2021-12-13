import { RiPhoneFill } from "react-icons/ri";

import * as S from "./styles";

function Navlinks() {
  return (
    <S.Wrapper>
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
