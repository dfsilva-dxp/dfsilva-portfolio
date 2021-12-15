import Image from "next/image";
import { RiArrowDropRightLine } from "react-icons/ri";

import * as S from "./styles";

function Banner() {
  return (
    <S.Banner className="border-top-bottom">
      <div className="div container">
        <div className="grid" />
        <S.Display>
          <S.Text className="align-items-center">
            <S.LeftContent>
              <h1>Front-End Developer & UI Design</h1>
              <h2>Desenvolver se tornou um hobby favorito.</h2>
              <p>E eu amo o que faço!</p>
            </S.LeftContent>
            <S.RightContent>
              <span>DNSV</span>
              <span>DNSV</span>
              <span>DNSV</span>
              <span>DNSV</span>
            </S.RightContent>
          </S.Text>

          <S.Picture className="align-items-center">
            <Image
              src="/images/scroll-down.svg"
              alt="Scroll Down"
              title="Scroll Down"
              width={18}
              height={118}
              objectFit="cover"
            />
          </S.Picture>
        </S.Display>
      </div>
    </S.Banner>
  );
}

export default Banner;
