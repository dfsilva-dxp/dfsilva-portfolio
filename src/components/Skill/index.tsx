import * as S from "./styles";

type SkillsProps = {
  skills: string[];
};

const Skills = ({ skills }: SkillsProps) => {
  return (
    <S.Skills>
      {skills && skills.map((skill, index) => <span key={index}>{skill}</span>)}
    </S.Skills>
  );
};

export default Skills;
