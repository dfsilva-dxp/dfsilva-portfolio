import { MdMenuBook, MdOutlineTranslate } from "react-icons/md";
import { courses, educations } from "utils/data";

import SchoolingItem from "components/Education/SchoolingItem";
import Courses from "./Courses";

import * as S from "./styles";

const EducationWrapper = () => {
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
              {educations.map((item) => (
                <SchoolingItem
                  key={item.id}
                  universityGraduate={item.universityGraduate}
                  course={item.course}
                  school={item.school}
                />
              ))}
            </S.Schooling>
            <S.Courses>
              <Courses
                title="Cursos intensivos"
                data={courses}
                icon={<MdMenuBook />}
              />
              <Courses
                title="Idiomas"
                data={[{ id: 1, title: "Inglês", time: "Intermediário" }]}
                icon={<MdOutlineTranslate />}
              />
            </S.Courses>
          </div>
        </S.Display>
      </div>
    </S.Wrapper>
  );
};

export default EducationWrapper;
