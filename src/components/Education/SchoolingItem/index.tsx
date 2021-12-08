import * as S from "./styles";

type SchoolingItemProps = {
  type: string;
  course: string;
  school: string;
};

const SchoolingItem = ({ type, course, school }: SchoolingItemProps) => {
  return (
    <S.Wrapper>
      <h3>{type}</h3>
      <h4>{course}</h4>
      <p>
        <strong>{school}</strong>
      </p>
    </S.Wrapper>
  );
};

export default SchoolingItem;
