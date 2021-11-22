import { ReactNode } from "react";

import Header from "components/Header";
import Footer from "components/Footer";

import * as S from "./styles";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Main>
      <Header />
      <S.Body>
        <div className="container">{children}</div>
      </S.Body>
      <Footer />
    </S.Main>
  );
};

export default Layout;
