import Skills from "components/Experiences/Skill";
import { experiences } from "utils/data";

import * as S from "./styles";

const ExperiencyInfo = () => {
  experiences;
  return (
    <>
      {experiences &&
        experiences.map((experience) => (
          <S.Info key={experience.id}>
            <div className="company-info">
              <h4>{experience.title}</h4>
              <p>{experience.activities}</p>
            </div>
            <div className="skills">
              <h4>{experience.company}</h4>
              <Skills skills={experience.skills} />
            </div>
            <div className="company-time">{experience.time}</div>
          </S.Info>
        ))}
    </>
  );
};

export default ExperiencyInfo;
