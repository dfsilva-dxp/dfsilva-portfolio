import * as S from "./styles";

type FullScreenMenuProps = {
  toggleIsActiveMenu: () => void;
  isActive: boolean;
};

const FullScreenMenu = ({ isActive }: FullScreenMenuProps) => {
  return (
    <S.FullScreenNav className={!isActive ? "" : "active"}>
      <div className="bg1" />
      <div className="bg2" />
      <div className="wrap">
        <ul className="custom-font">
          <li>
            <a href="#home" className="link">
              <span>01.</span>
              <span className="simple-btn">Home</span>
            </a>
          </li>
          <li>
            <a href="#experiency" className="link">
              <span>02.</span>
              <span className="simple-btn">Experiências</span>
            </a>
          </li>
          <li>
            <a href="#education" className="link">
              <span>03.</span>
              <span className="simple-btn">Formação</span>
            </a>
          </li>
          <li>
            <a href="#project" className="link">
              <span>04.</span>
              <span className="simple-btn">Projetos</span>
            </a>
          </li>
          <li>
            <a href="#contact" className="link">
              <span>05.</span>
              <span className="simple-btn">Contato</span>
            </a>
          </li>
        </ul>
      </div>
    </S.FullScreenNav>
  );
};

export default FullScreenMenu;
