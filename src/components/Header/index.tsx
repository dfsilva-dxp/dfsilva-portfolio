import { useCallback, useState } from "react";

import Logo from "../Logo";
import Navlinks from "../Navlinks";
import BurguerButton from "../BurguerButton";
import FullScreenMenu from "../FullScreenMenu";

import * as S from "./styles";

function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = useCallback(() => setIsActive(!isActive), [isActive]);

  return (
    <>
      <S.Header>
        <div className="container">
          <Logo />
          <Navlinks className="desktop-view" />
          <BurguerButton
            isActive={isActive}
            toggleMenu={toggleMenu}
            className="mobile-view"
          />
        </div>
      </S.Header>
      <FullScreenMenu isActive={isActive} />
    </>
  );
}

export default Header;
