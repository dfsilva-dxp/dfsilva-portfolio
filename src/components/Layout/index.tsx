import Header from "../Header";

import * as S from "./styles";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <S.Container>{children}</S.Container>
    </>
  );
};

export default Layout;
