import Image from "next/image";

import * as S from "./styles";

const myLoader = ({ src, _, quality }) => {
  return `${src}?&q=${quality || 75}`;
};

function Logo() {
  return (
    <S.Logo>
      <Image
        src="/images/logo.svg"
        alt="Logo Daniel Silva - Front-End Developer"
        title="Logo Daniel Silva - Front-End Developer"
        width={46}
        height={46}
        objectFit="cover"
      />
    </S.Logo>
  );
}

export default Logo;
