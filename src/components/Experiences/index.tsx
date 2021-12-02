import ExperienceInfo from "components/Experiences/ExperienceInfo";

import * as S from "./styles";

const ExperienceWrapper = () => {
  return (
    <S.Wrapper>
      <div className="container">
        <S.Display>
          <h1 className="title-section">Experiência</h1>
          <div>
            <p className="paragraph-section">
              Front-end developer a <strong>4 anos</strong>, apaixonado por
              desenvolvimento com <strong>Reactjs</strong>,{" "}
              <strong>Nextjs</strong> e <strong>UI Design</strong>. <br />
              <em>Desenvolver se tornou um hobby favorito</em>.
            </p>
            <S.WrapInfo>
              <ExperienceInfo />
            </S.WrapInfo>
          </div>
        </S.Display>
      </div>
    </S.Wrapper>
  );
};

export default ExperienceWrapper;
