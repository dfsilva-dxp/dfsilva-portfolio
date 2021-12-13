import Logo from "../Logo";
import Navlinks from "../Navlinks";

import * as S from "./styles";

function Header() {
  return (
    <S.Header>
      <div className="container">
        <Logo />
        <Navlinks />
      </div>
    </S.Header>
  );
}

export default Header;
