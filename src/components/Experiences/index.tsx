import { ExperienceSectionProps } from "types/api";

import ExperienceInfo from "components/Experiences/ExperienceInfo";

import * as S from "./styles";

const ExperienceWrapper = ({
  title,
  description,
  experiences
}: ExperienceSectionProps) => {
  experiences.sort((a, b) => (+a.id < +b.id ? -1 : 1));

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
            <S.WrapInfo>
              <ExperienceInfo experiences={experiences} />
            </S.WrapInfo>
          </div>
        </S.Display>
      </div>
    </S.Wrapper>
  );
};

export default ExperienceWrapper;
