import { HTMLAttributes } from "react";

import * as S from "./styles";

interface BurguerButtonProps extends HTMLAttributes<HTMLButtonElement> {
  toggleMenu: () => void;
  isActive: boolean;
}

function BurguerButton({
  toggleMenu,
  isActive,
  className,
}: BurguerButtonProps) {
  return (
    <S.NavContent className={className}>
      <S.BtnNavContainer
        className={!isActive ? "open-menu" : "close-menu"}
        onClick={toggleMenu}
      >
        <div className="btn-nav position-relative"></div>
      </S.BtnNavContainer>
    </S.NavContent>
  );
}

export default BurguerButton;
