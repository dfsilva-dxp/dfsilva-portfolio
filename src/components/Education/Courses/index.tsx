import { ReactNode } from "react";

import * as S from "./styles";

type Course = {
  id: number;
  title: string;
  time?: string;
};

type CoursesProps = {
  icon: ReactNode;
  title: string;
  data: Course[];
};

const Courses = ({ icon, title, data }: CoursesProps) => {
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
              <strong>{item.time}</strong>
            </div>
          ))}
      </>
    </S.Wrapper>
  );
};

export default Courses;
