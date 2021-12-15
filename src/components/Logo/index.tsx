import Image from "next/image";

import * as S from "./styles";

function Logo() {
  return (
    <S.Logo>
      <Image
        src="/images/logo.svg"
        alt="Logo Daniel Silva - Front-End Developer"
        title="Logo Daniel Silva - Front-End Developer"
        width={130}
        height={37}
        objectFit="cover"
      />
    </S.Logo>
  );
}

export default Logo;
