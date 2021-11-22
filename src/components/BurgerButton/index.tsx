import * as S from "./styles";

type BurgerButtonProps = {
  toggleIsActiveMenu: () => void;
  isActive: boolean;
};

const BurgerButton = ({ toggleIsActiveMenu, isActive }: BurgerButtonProps) => {
  return (
    <>
      <S.NavContent>
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
