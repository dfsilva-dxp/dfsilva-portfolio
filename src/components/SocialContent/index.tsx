import {
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinBoxLine,
} from "react-icons/ri";

import { Container } from "./styles";

function SocialContent() {
  return (
    <Container>
      <span>siga-me nas redes sociais</span>
      <span> - </span>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/daniel-silva-dxp/"
            rel="noreferrer"
          >
            <RiLinkedinBoxLine />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/daniel.dxp/" rel="noreferrer">
            <RiInstagramLine />
          </a>
        </li>
        <li>
          <a href="https://github.com/daniel-silva-dxp" rel="noreferrer">
            <RiGithubLine />
          </a>
        </li>
      </ul>
    </Container>
  );
}

export default SocialContent;
