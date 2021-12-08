import { ReactNode } from "react";
import { Course, Language } from "types/api";

import * as S from "./styles";

type Props = {
  icon: ReactNode;
  title: string;
  data: Course[] | Language[];
};

const Courses = ({ icon, title, data }: Props) => {
  return (
    <S.Wrapper>
      <S.Heading>
        {icon}
        <h4>{title}</h4>
      </S.Heading>
      <>
        {data &&
          data.map((item) => (
            <div key={item.id} className="row">
              <span>{item.title}</span>
              <strong>{item.duration_level}</strong>
            </div>
          ))}
      </>
    </S.Wrapper>
  );
};

export default Courses;
