import { useCallback, useState } from "react";

import BurgerButton from "components/BurgerButton";
import FullScreenMenu from "components/FullScreenMenu";

import * as S from "./styles";
import NavLinks from "components/NavLinks";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleIsActiveMenu = useCallback(
    () => setIsActive(!isActive),
    [isActive]
  );

  return (
    <>
      <S.Header>
        <div className="container">
          <S.Logo>
            daniel
            <span>silva</span>
          </S.Logo>
          <NavLinks className="desktop-view" />
          <BurgerButton
            className="mobile-view"
            toggleIsActiveMenu={toggleIsActiveMenu}
            isActive={isActive}
          />
        </div>
      </S.Header>
      <FullScreenMenu
        toggleIsActiveMenu={toggleIsActiveMenu}
        isActive={isActive}
      />
    </>
  );
};

export default Header;
