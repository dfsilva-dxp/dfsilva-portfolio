import { LogoProps } from "types/api";
import { getImageUrl } from "utils/getImageUrl";

import * as S from "./styles";

const Logo = ({ alternativeText, url }: LogoProps) => {
  return (
    <S.LogoWrapper
      src={getImageUrl(url)}
      alt={alternativeText}
      title={alternativeText}
    />
  );
};

export default Logo;
