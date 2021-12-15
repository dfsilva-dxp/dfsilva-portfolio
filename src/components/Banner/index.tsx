import Image from "next/image";

import * as S from "./styles";

function Banner() {
  return (
    <S.Banner className="border-top-bottom">
      <div className="container">
        <div className="grid" />
        <S.Presentation>
          <S.Display>
            <S.Text>
              <div className="display-left">
                <h1>Front-End Developer & UI Design</h1>
                <span>
                  Desenvolver se <br />
                  tornou um hobby <br />
                  favorito.
                </span>
                <p>E eu amo o que faço!</p>
              </div>
              <div className="display-right">
                <span className="custom-font">DNSV</span>
                <span className="custom-font">DNSV</span>
                <span className="custom-font">DNSV</span>
                <span className="custom-font">DNSV</span>
              </div>
            </S.Text>
          </S.Display>
          <S.Scroll>
            <Image
              src="/images/scroll-down.svg"
              alt="Scroll Down"
              title="Scroll Down"
              width={18}
              height={118}
              objectFit="cover"
            />
          </S.Scroll>
        </S.Presentation>
      </div>
    </S.Banner>
  );
}

export default Banner;
