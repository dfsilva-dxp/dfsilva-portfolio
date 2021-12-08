import { Work } from "types/api";

import SwiperSlideWorks from "./SwiperSlideWorks";

import * as S from "./styles";

type Props = {
  works: Work[];
};

const WorksWrapper = ({ works }: Props) => {
  return (
    <S.Wrapper>
      <div className="container">
        <SwiperSlideWorks works={works} />
      </div>
    </S.Wrapper>
  );
};

export default WorksWrapper;
