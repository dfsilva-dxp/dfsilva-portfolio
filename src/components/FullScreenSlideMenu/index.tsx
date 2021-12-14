import FullScreenNavLinks from "../FullScreenNavLinks";
import SocialContent from "../SocialContent";

import * as S from "./styles";

type FullScreenMenuProps = {
  isActive: boolean;
};

function FullScreenSlideMenu({ isActive }: FullScreenMenuProps) {
  return (
    <S.FullScreenNav className={!isActive ? "" : "active"}>
      <div className="bg1" />
      <div className="bg2" />

      <S.ContentNav className="wrap">
        <div className="container">
          <div className="grid" />
          <FullScreenNavLinks />
          <SocialContent />
        </div>
      </S.ContentNav>
    </S.FullScreenNav>
  );
}

export default FullScreenSlideMenu;
