import { Base, Header } from "components";

export default function HeaderContainer() {
  return (
    <Base>
      <Base.Container>
        <Base.Grid />

        <Header>
          <Header.Display>
            <Header.Left>
              <Header.Title>Olá, eu sou um Artista de Pixel!</Header.Title>

              <Header.Description>
                Mas se preferir, <br />
                pode me chamar de <br />
                Front-End Developer
              </Header.Description>

              <Header.ShortDescription>
                E eu amo o que faço!
              </Header.ShortDescription>
            </Header.Left>

            <Header.Right />
          </Header.Display>

          <Header.Arrow />
        </Header>
      </Base.Container>
    </Base>
  );
}
