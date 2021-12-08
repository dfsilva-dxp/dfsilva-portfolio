import { Skills as SkillsProps } from "types/api";

import * as S from "./styles";

type Props = {
  skills: SkillsProps[];
};

const Skills = ({ skills }: Props) => {
  return (
    <S.Skills>
      {skills && skills.map(({ id, title }) => <span key={id}>{title}</span>)}
    </S.Skills>
  );
};

export default Skills;
