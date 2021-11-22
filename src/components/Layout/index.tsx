import { ReactNode } from "react";

import Footer from "components/Footer";

import * as S from "./styles";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Main>
      <S.Body>{children}</S.Body>
      <Footer />
    </S.Main>
  );
};

export default Layout;
