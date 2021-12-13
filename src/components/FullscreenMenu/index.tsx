import SocialContent from "../SocialContent";
import * as S from "./styles";

type FullScreenMenuProps = {
  isActive: boolean;
};

const FullScreenMenu = ({ isActive }: FullScreenMenuProps) => {
  return (
    <S.FullScreenNav className={!isActive ? "" : "active"}>
      <div className="bg1" />
      <div className="bg2" />
      <div className="wrap">
        <div className="container" />
        <ul className="custom-font">
          <li>
            <a href="#home" className="link">
              <span>00.</span>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#experiency" className="link">
              <span>01.</span>
              <span>Experiências</span>
            </a>
          </li>
          <li>
            <a href="#education" className="link">
              <span>02.</span>
              <span>Formação</span>
            </a>
          </li>
          <li>
            <a href="#project" className="link">
              <span>03.</span>
              <span>Projetos</span>
            </a>
          </li>
          <li>
            <a href="#contact" className="link">
              <span>04.</span>
              <span>Contato</span>
            </a>
          </li>
        </ul>
        <SocialContent />
      </div>
    </S.FullScreenNav>
  );
};

export default FullScreenMenu;
