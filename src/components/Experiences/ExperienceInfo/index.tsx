import { ExperienceProps } from "types/api";

import Skills from "components/Experiences/Skill";

import * as S from "./styles";

type Props = {
  experiences: ExperienceProps[];
};

const ExperiencyInfo = ({ experiences }: Props) => {
  experiences;
  return (
    <>
      {experiences &&
        experiences.map((experience) => (
          <S.Info key={experience.id}>
            <div className="company-info">
              <h4>{experience.title}</h4>
              <p>{experience.description}</p>
            </div>
            <div className="skills">
              <h4>{experience.company}</h4>
              <Skills skills={experience.skills} />
            </div>
            <div className="company-time">{experience.date}</div>
          </S.Info>
        ))}
    </>
  );
};

export default ExperiencyInfo;
