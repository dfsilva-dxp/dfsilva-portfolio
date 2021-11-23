import ExperiencyInfo from "components/ExperiencyInfo";
import * as S from "./styles";

const ExperiencySection = () => {
  return (
    <S.Wrapper>
      <div className="container">
        <S.Display>
          <h1>Experiência</h1>
          <S.ExperiencyContent>
            <p>
              Front-end developer a <strong>4 anos</strong>, apaixonado por
              desenvolvimento com <strong>Reactjs</strong>,{" "}
              <strong>Nextjs</strong> e <strong>UI Design</strong>. <br />
              <em>Desenvolver se tornou um hobby favorito</em>.
            </p>
            <S.ExperiencyInfo>
              <ExperiencyInfo />
            </S.ExperiencyInfo>
          </S.ExperiencyContent>
        </S.Display>
      </div>
    </S.Wrapper>
  );
};

export default ExperiencySection;
