import Header from "../Header";

import * as S from "./styles";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <S.Container>
        <S.Content>{children}</S.Content>
        <S.Footer></S.Footer>
      </S.Container>
    </>
  );
};

export default Layout;
