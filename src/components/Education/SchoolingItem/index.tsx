import * as S from "./styles";

type SchoolingItemProps = {
  universityGraduate: string;
  course: string;
  school: string;
};

const SchoolingItem = ({
  universityGraduate,
  course,
  school
}: SchoolingItemProps) => {
  return (
    <S.Wrapper>
      <h3>{universityGraduate}</h3>
      <h4>{course}</h4>
      <p>
        <strong>{school}</strong>
      </p>
    </S.Wrapper>
  );
};

export default SchoolingItem;
