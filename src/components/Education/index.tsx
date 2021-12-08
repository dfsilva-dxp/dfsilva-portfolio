import { MdMenuBook, MdOutlineTranslate } from "react-icons/md";

import { EducationSectionProps } from "types/api";

import SchoolingItem from "components/Education/SchoolingItem";
import Courses from "./Courses";

import * as S from "./styles";

const EducationWrapper = ({
  title,
  description,
  schooling,
  courses,
  languages
}: EducationSectionProps) => {
  return (
    <S.Wrapper>
      <div className="container">
        <S.Display>
          <h1 className="title-section">{title}</h1>
          <div>
            <div
              className="paragraph-section"
              dangerouslySetInnerHTML={{ __html: description }}
            />

            <S.Schooling>
              {schooling &&
                schooling.map((item) => (
                  <SchoolingItem
                    key={item.id}
                    type={item.type}
                    course={item.course}
                    school={item.school}
                  />
                ))}
            </S.Schooling>
            <S.Courses>
              {courses &&
                courses.map((item) => (
                  <Courses
                    key={item.id}
                    title={item.title}
                    data={item.courses}
                    icon={<MdMenuBook />}
                  />
                ))}

              {languages &&
                languages.map((item) => (
                  <Courses
                    key={item.id}
                    title={item.title}
                    data={item.language}
                    icon={<MdOutlineTranslate />}
                  />
                ))}
            </S.Courses>
          </div>
        </S.Display>
      </div>
    </S.Wrapper>
  );
};

export default EducationWrapper;
