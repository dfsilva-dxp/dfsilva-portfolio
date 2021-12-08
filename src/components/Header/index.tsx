import { useCallback, useEffect, useRef, useState } from "react";

import { LogoProps } from "types/api";

import BurgerButton from "components/Header/BurgerButton";
import FullScreenMenu from "components/Header/FullScreenMenu";
import NavLinks from "components/Header/NavLinks";
import Logo from "./Logo";

import * as S from "./styles";

type Props = {
  logo: LogoProps;
};

const Header = ({ logo }: Props) => {
  const [isActive, setIsActive] = useState(false);
  const [scroll, setScroll] = useState(0);

  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (headingRef.current) {
      const offset = 120;

      if (scroll >= offset) {
        headingRef.current.style.backgroundColor = "#25262A";
        headingRef.current.style.boxShadow = "0 0 60px rgba(0, 0, 0, 0.05)";
      } else {
        headingRef.current.style.backgroundColor = "transparent";
        headingRef.current.style.boxShadow = "none";
      }
    }
  }, [scroll]);

  useEffect(() => {
    const updateScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", updateScroll);

    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const toggleIsActiveMenu = useCallback(
    () => setIsActive(!isActive),
    [isActive]
  );

  return (
    <>
      <S.Header ref={headingRef}>
        <div className="container">
          <Logo {...logo} />
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
