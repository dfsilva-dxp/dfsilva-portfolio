import * as S from "./styles";

const NavigationButtons = () => {
  return (
    <S.Wrapper>
      <div className="cursor-pointer swiper-button-next swiper-nav-ctrl simp-next">
        <span className="simple-btn right next">Next</span>
      </div>
      <div className="cursor-pointer swiper-button-prev swiper-nav-ctrl simp-prev">
        <span className="simple-btn prev">Prev</span>
      </div>
    </S.Wrapper>
  );
};

export default NavigationButtons;
