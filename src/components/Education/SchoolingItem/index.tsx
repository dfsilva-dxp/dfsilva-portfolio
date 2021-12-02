import * as S from "./styles";

type SchoolingItemProps = {
  universityGraduate: string;
  course: string;
  school: string;
  state: string;
};

const SchoolingItem = ({
  universityGraduate,
  course,
  school,
  state
}: SchoolingItemProps) => {
  return (
    <S.Wrapper>
      <h3>{universityGraduate}</h3>
      <h4>{course}</h4>
      <p>
        <strong>{school}</strong> - {state}
      </p>
    </S.Wrapper>
  );
};

export default SchoolingItem;
