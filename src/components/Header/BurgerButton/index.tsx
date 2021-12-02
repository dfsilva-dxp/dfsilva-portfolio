import { HTMLAttributes } from "react";
import * as S from "./styles";

interface BurgerButtonProps extends HTMLAttributes<HTMLButtonElement> {
  toggleIsActiveMenu: () => void;
  isActive: boolean;
}

const BurgerButton = ({
  toggleIsActiveMenu,
  isActive,
  className
}: BurgerButtonProps) => {
  return (
    <>
      <S.NavContent className={className}>
        <S.BtnNavContainer
          className={!isActive ? "open-menu" : "close-menu"}
          onClick={toggleIsActiveMenu}
        >
          <div className="btn-nav position-relative"></div>
        </S.BtnNavContainer>
      </S.NavContent>
    </>
  );
};

export default BurgerButton;
