import { ReactNode } from "react";

import * as S from "./styles";

type ContactUsWrapperProps = {
  icon: ReactNode;
  title: string;
  data: string;
};

const ContactTypeContent = ({ icon, title, data }: ContactUsWrapperProps) => {
  return (
    <S.Wrapper>
      <S.Heading>
        {icon}
        <h4>{title}</h4>
      </S.Heading>
      <div className="row">
        <span>{data}</span>
      </div>
    </S.Wrapper>
  );
};

export default ContactTypeContent;
