import { BannerProps } from "types/api";

import * as S from "./styles";

type Props = {
  banner: BannerProps;
};

const Banner = ({ banner }: Props) => {
  return (
    <S.Banner>
      <div className="container">
        <S.Display>
          <S.Into>
            <strong>{banner.title}</strong>
            <h1>{banner.description}</h1>
            <p>{banner.short_description}</p>
            <a href={banner.button.url}>{banner.button.label}</a>
          </S.Into>
        </S.Display>
      </div>
    </S.Banner>
  );
};

export default Banner;
