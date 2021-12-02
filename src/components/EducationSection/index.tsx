import SchoolingItem from "components/SchoolingItem";
import * as S from "./styles";

const EducationSection = () => {
  return (
    <S.Wrapper>
      <div className="container">
        <S.Display>
          <h1 className="title-section">Formação</h1>
          <div>
            <p className="paragraph-section">
              Minha mais recente experiência acadêmica é o <strong>MBA </strong>
              de <strong>Engenharia de Software</strong> que estou fazendo na
              <strong> FIAP</strong>. Além disso me mantenho sempre atualizado
              com cursos intensivos online.
            </p>
            <S.Schooling>
              <SchoolingItem />
              <SchoolingItem />
              <SchoolingItem />
            </S.Schooling>
          </div>
        </S.Display>
      </div>
    </S.Wrapper>
  );
};

export default EducationSection;
