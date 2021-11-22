import * as S from "./styles";

const Banner = () => {
  return (
    <S.Banner>
      <div className="container">
        <S.Display>
          <S.Into>
            <strong>Font-End Developer</strong>
            <h1>Desenvolver se tornou um hobby favorito...</h1>
            <p>...e eu amo o que faço!</p>
            <a href="#contact">Vamos Conversar!</a>
          </S.Into>
        </S.Display>
      </div>
    </S.Banner>
  );
};

export default Banner;
