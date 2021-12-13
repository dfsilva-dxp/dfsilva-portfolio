import * as S from "./styles";

function FullScreenNavLinks() {
  return (
    <S.FullScreenNavUl>
      <ul>
        <li>
          <a href="#home">
            <span>00.</span>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#experiency">
            <span>01.</span>
            <span>Experiências</span>
          </a>
        </li>
        <li>
          <a href="#education">
            <span>02.</span>
            <span>Formação</span>
          </a>
        </li>
        <li>
          <a href="#project">
            <span>03.</span>
            <span>Projetos</span>
          </a>
        </li>
        <li>
          <a href="#contact">
            <span>04.</span>
            <span>Contato</span>
          </a>
        </li>
      </ul>
    </S.FullScreenNavUl>
  );
}

export default FullScreenNavLinks;
